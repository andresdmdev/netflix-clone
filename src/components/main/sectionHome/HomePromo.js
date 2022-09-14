import logoHome1 from '../../../images/small-logo.svg'

export default function HomePromo({ title, overview, mediaType }){
  return (
    <>
      <div className={`hidden lg:flex w-2/6 absolute top-16 sm:top-26 lg:top-64 flex-col justify-start
      left-4 sm:left-10 lg:left-14 z-20 transition-all duration-500 ease-in-out`}>
        <div className='flex flex-row items-center'>
          <img 
            src={logoHome1} 
            alt='logo-home'
            className='lg:w-8 -ml-2'
          />
          <div className='ml-1 capitalize text-base tracking-widest font-semibold text-gray-tones-0'>{mediaType}</div>
        </div>
        <div className=''>
          <h2 className='mt-0 -ml-1 text-6xl text-gray-tones-0 font-bold'>{title}</h2>
          <p className='mt-0 -ml-1 text-base text-gray-tones-0 font-bold'>{overview}</p>
        </div>
      </div>
      <div className={`flex absolute top-24 sm:top-52 lg:top-80 right-0 bg-gray-tones-600 bg-opacity-40 w-8 sm:w-20 
        transition-all duration-500 ease-in-out border-l-2 sm:border-l-4 border-l-gray-tones-0 items-center justify-start
        py-0 sm:py-2`}>
          <span className='text-s sm:text-sm font-medium indent-1 sm:indent-3 text-gray-tones-0'>16+</span>
      </div>  
    </>
  )
}