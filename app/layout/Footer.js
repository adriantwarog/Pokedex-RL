import IconSnap from '../imgs/IconSnap.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default () => <>
<div className="h-24" />
  <div className="bg-pokeball" />
<footer id="footer" className="flex">
<NavItem href="/camera">
  <IconCamera />
  Camera
</NavItem>
<NavItem  href="/pokedex">
  <IconPoke />
  Pokedex
</NavItem>

<Link href="/camera" className="menu-item flex-1 flex justify-center ">
  <img src={IconSnap.src}  className="-mt-4" />
</Link>
<NavItem  href="/leaderboard">
  <IconLeader />
  Leaderboard
</NavItem>
<NavItem  href="/profile">
  <IconUser />
  Profile
</NavItem>

{/* <NavItem>
  <IconSettings />
  Settings
</NavItem> */}
</footer>
</>

const IconCamera =()=> 
<svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"/>
  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>


const IconSettings =()=>
<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>

const IconLeader =()=> 
<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z"/>
</svg>


const IconUser = () => <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

const IconPoke =()=>
<svg className="w-6 h-6" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor" d="M15.1742 28.3484C22.4503 28.3484 28.3484 22.4503 28.3484 15.1742C28.3484 7.8981 22.4503 2 15.1742 2C7.8981 2 2 7.8981 2 15.1742C2 22.4503 7.8981 28.3484 15.1742 28.3484Z" strokeWidth="2.22663" strokeLinecap="round" strokeLinejoin="round"/>
<path stroke="currentColor" d="M15.1741 19.1267C16.2223 19.1267 17.2276 18.7103 17.9688 17.9691C18.71 17.2279 19.1264 16.2226 19.1264 15.1744C19.1264 14.1262 18.71 13.121 17.9688 12.3798C17.2276 11.6386 16.2223 11.2222 15.1741 11.2222C14.1259 11.2222 13.1206 11.6386 12.3795 12.3798C11.6383 13.121 11.2219 14.1262 11.2219 15.1744C11.2219 16.2226 11.6383 17.2279 12.3795 17.9691C13.1206 18.7103 14.1259 19.1267 15.1741 19.1267V19.1267Z" strokeWidth="2.22663" strokeLinecap="round" strokeLinejoin="round"/>
<path stroke="currentColor" d="M2 15.1743H11.222M19.1265 15.1743H28.3484" strokeWidth="2.22663"/>
</svg>


const NavItem = ({ href = "/", children }) =>
  <LinkActive href={href} className="menu-item flex-1 flex justify-center items-center flex flex-col text-gray-600 gap-0.5 text-center border-b-2 transition transition-all hover:bg-blue-50" activeClassName="text-blue-600  border-b-blue-400 bg-blue-100" inactiveClassName="border-b-white">
    {children}
  </LinkActive>



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