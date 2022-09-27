import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import user from '../../images/user.png'
import HeaderMenu from './HeaderMenu'
import HeaderMenuMovil from './HeaderMenuMovil'
import SearchBar from './SearchBar'

export default function Header(){

  return (
    <header className="h-16 sm:h-20">
      <div className="bg-none absolute top-0 left-0 z-10 w-full">
        <div className={`flex z-20 px-4 lg:pl-14 sm:pl-10 lg:py-8 sm:py-6 pt-4 h-10 sm:h-16 items-center transition-all 
        duration-300 ease-in-out bg-gradient-to-b from-gray-tones-400 justify-between`}>
          <div className='flex items-center'>
            <Link to='/'>
              <img 
                src={logo} 
                alt='netflix-logo'
                className="lg:w-24 sm:w-20 w-16 lg:h-6 sm:h-5 h-5" 
              />
            </Link>
            <HeaderMenu />
            <HeaderMenuMovil />
          </div>
          <div className='flex items-center justify-end gap-6'>
            <SearchBar />
            <a href='/' className='hidden sm:block mr-10 w-8 h-8 rounded-lg transition-all duration-300 ease-in-out cursor-pointer'>
              <img src={user} alt='user' />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}