import logo from '../../images/logo.png'
import user from '../../images/user.png'
import SearchBar from './SearchBar'

const MENU_LINKS = ['Movies', 'Series', 'List', 'Popular'] 

export default function Header(){

  const menu = MENU_LINKS.map(link => (
    <li 
      key={link}
      className={`text-xs sm:text-sm text-gray-tones-0 font-medium cursor-pointer 
      hover:text-gray-tones-10 transition-all duration-300 ease-in`}
      >
        {link}
    </li>
  )) 

  return (
    <header className="h-14 sm:h-20">
      <div className="bg-none absolute top-0 left-0 z-10 w-full">
        <div className={`flex z-20 px-4 lg:pl-14 sm:pl-10 lg:py-8 sm:py-6 py-0 h-10 sm:h-16 items-center transition-all 
        duration-300 ease-in-out bg-gradient-to-b from-gray-tones-400 justify-between`}>
          <div className='flex items-center'>
            <img 
              src={logo} 
              alt='netflix-logo'
              className="lg:w-24 sm:w-20 w-12 h-fit" 
            />
            <ul className='hidden sm:flex ml-5 gap-3 sm:gap-6 transition-all duration-300 ease-in-out'>
              {menu}
            </ul>
          </div>
          <div className='flex items-center justify-end gap-6'>
            <SearchBar />
            <a href='/' className='hidden sm:block w-8 h-8 rounded-lg transition-all duration-300 ease-in-out cursor-pointer'>
              <img src={user} alt='user' />
            </a>
          </div>
        </div>
      </div>
      
    </header>
  )
}