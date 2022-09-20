import { Link } from "react-router-dom"

const MENU_LINKS = ['movies', 'series', 'list'] 

export default function HeaderMenu(){

  const menu = MENU_LINKS.map(link => (
    <li 
      key={link}
      className={`text-xs sm:text-sm text-gray-tones-0 font-medium cursor-pointer 
      hover:text-gray-tones-10 transition-all duration-300 ease-in capitalize`}
      >
       <Link to={`/${link === 'series' ? 'tv' : link}`}>{link}</Link>
    </li>
  )) 

  return (
    <ul className='hidden sm:flex ml-5 gap-3 sm:gap-6 transition-all duration-300 ease-in-out'>
      {menu}
    </ul>
  )
}