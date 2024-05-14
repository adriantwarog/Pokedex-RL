"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import { useEffect, useRef } from 'react'

import Header from '@/app/layout/Header'
import PhotoFooter from '@/app/layout/PhotoFooter'
import useSound from 'use-sound'
import Webcam from "react-webcam";

// 1. Take a photo
// 2. Resize the photo to 512x512
// 3. Send the photo to the server
// 4. Pause the video feed and show the photo

const Camera = observer(() => {
  
  const store = useContext(StoreContext)
  const webcamRef = useRef(null);
  const [play ] = useSound('/snap.mp3');

  useEffect(() => {
    store.picture.loadingContent = false
    store.picture.buttonPressed = false
  }, []);

  const takeScreenshot = async () => {

      if(store.picture.loadingContent || store.picture.buttonPressed) return

      store.picture.buttonPressed = true
      setTimeout(() => {
        store.picture.buttonPressed = false
        store.picture.loadingContent = true
      }, 200);

      play();
      const imageSrc = webcamRef.current.getScreenshot();
      const resizedImage = await resizeImage(imageSrc)
      store.handleCaptureImage(resizedImage)
  }

  const uploadImage = async (e) => {
    if(store.picture.loadingContent || store.picture.buttonPressed) return

    store.picture.buttonPressed = true
    setTimeout(() => {
      store.picture.buttonPressed = false
      store.picture.loadingContent = true
    }, 200);
    store.handleCaptureImage(e)
  }


  return (
    <>
      <Header />
      <div className="camera-image-holder">
       
          <div className={`video-holder ${store.picture.buttonPressed && 'buttonPressed'}`}>
          {store.picture.loadingContent ? 
              <div className="camera-snap-preview fading-in-out" style={{
                backgroundImage: `url(${store.capture.image})`
              }} />
            :
              <Webcam 
                onClick={()=>{
                  // trigger input file upload 
                  document.querySelector('input[type="file"]').click()
                }}
                ref={webcamRef}
                forceScreenshotSourceSize={true}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "environment"
                }} />
            }
          </div>
      </div>
      {/* input file upload that is hidden and triggered if someone clicks on the webcam */}
      <input 
        type="file" 
        accept="image/*" 
        capture="environment" 
        onChange={uploadImage} 
        style={{ display: 'none' }} />

     <div className="camera-text">
    
       {store.picture.loadingContent ?

        <div className="capture-processing">
          <div className="mt-4 bouncing-loader"><div /><div /><div /></div>
          <span>
            <div className="desc processing">Processing</div>
          </span>
        </div>
        :

        <div className="capture-anything">
          <div className="title">
            Camera
          </div>
          <div className="desc capturing">
            Capture a photo of anything
          </div>
        </div>
        }
     </div>
     <PhotoFooter takeScreenshot={takeScreenshot} />
    </>
  );
});

function resizeImage(base64Str, maxWidth = 512, maxHeight = 512) {
  return new Promise((resolve) => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
      let canvas = document.createElement('canvas')
      const MAX_WIDTH = maxWidth
      const MAX_HEIGHT = maxHeight
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL("image/jpg",0.8))
    }
  })
}

export default Camera;