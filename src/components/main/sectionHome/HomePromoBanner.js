import arrow from '../../../images/arrow.svg'
import info from '../../../images/info.svg'

export default function HomePromoBanner({ handleClick }){
  return (
    <div className="relative justify-between flex">
      <div className="flex absolute lg:leading-normal w-auto sm:w-auto -top-2 sm:-top-5 justify-start gap-1 sm:gap-3">
        <button className={`justify-center w-auto items-center flex bg-gray-tones-0 
          text-gray-tones-600 px-1.4 py-1 sm:pl-5 sm:pr-6 sm:py-2 lg:py-1 rounded
          transition-all duration-500 ease-in-out hover:bg-gray-tones-10`}
          onClick={handleClick}>
          <div>
            <img src={arrow} alt='arrow-logo' className='w-1.3 mr-1.2 sm:w-4 sm:mr-2'  />
          </div>
          <p className="text-ss leading-normal sm:text-sm font-semibold sm:leading-4 lg:leading-8">Reproducir</p>
        </button>
        <button className={`justify-center w-24 sm:w-52 items-center flex bg-gray-tones-50 bg-opacity-70 
          hover:bg-opacity-80 hover:bg-gray-tones-100 text-gray-tones-600 px-1.4 py-1 sm:pl-5 sm:pr-6 sm:py-2
          lg:py-1 rounded transition-all duration-500 ease-in-out`}>
          <div>
            <img src={info} alt='info-logo' className='w-2 mr-1.2 sm:w-4 sm:mr-2 lg:w-6'  />
          </div>
          <p className="text-ss leading-normal sm:text-sm font-semibold sm:leading-4 lg:leading-8 text-gray-tones-0">Mas informacion</p>
        </button>
      </div>
    </div>
  )
}