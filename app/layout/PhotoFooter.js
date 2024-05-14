"use client";
import { StoreContext, useContext, observer } from '@/app/Mobx'
import IconSnap from '../imgs/IconSnapDark.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default observer(({ takeScreenshot }) => {
	const store = useContext(StoreContext)
	return (
		<>
			<div className="photo-footer-bg" />
			<div className="bg-pokeball" />
				<footer id="footer" className="flex photo-footer">
				<NavItem  href="/">
					<IconBack />
					Back
				</NavItem>
				<div 
					className={`menu-item flex-1 flex justify-center cursor-pointer camera-button ${store.picture.buttonPressed && 'buttonPressed'} ${store.picture.loadingContent && 'loadingContent'}`}
					onClick={takeScreenshot}
				>
					<img src={IconSnap.src}  className="-mt-4" />
				</div>
				<div 
					className={`menu-item flex-1 flex`}
				>
				</div>
			</footer>
			</>
	)
})

const NavItem = ({ href = "/", children }) =>
  <LinkActive href={href} className="menu-item flex-1 flex justify-center items-center flex flex-col text-white gap-0.5 text-center transition transition-all hover:bg-gray-800 ">
    {children}
  </LinkActive>

const IconBack = () => <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
</svg>


function LinkActive({ children, inactiveClassName, className, href, activeClassName }) {
	const pathname = usePathname()
  return (
	<Link
		href={href || "/"}
		className={
      pathname.includes(href) 
      ? 
      className + ` ` + activeClassName 
      : 
      className + ` ` + inactiveClassName
      }
		>{children}</Link>
  )
}