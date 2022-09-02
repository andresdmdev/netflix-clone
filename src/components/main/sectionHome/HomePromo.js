import logoHome1 from '../../../images/logo-home.png'
import HomePromoBanner from './HomePromoBanner'

export default function HomePromo({ handleClick }){
  return (
    <>
      <div className={`w-2/6 absolute top-16 sm:top-26 lg:top-36 flex flex-col justify-end 
      left-4 sm:left-10 lg:left-14 z-20 transition-all duration-500 ease-in-out`}>
        <img 
          src={logoHome1} 
          alt='logo-home'
        />
        <HomePromoBanner handleClick={handleClick} />
      </div>
      <div className={`flex absolute top-24 sm:top-52 lg:top-80 right-0 bg-gray-tones-600 bg-opacity-40 w-8 sm:w-20 
        transition-all duration-500 ease-in-out border-l-2 sm:border-l-4 border-l-gray-tones-0 items-center justify-start
        py-0 sm:py-2`}>
          <span className='text-s sm:text-sm font-medium indent-1 sm:indent-3 text-gray-tones-0'>16+</span>
      </div>  
    </>
  )
}