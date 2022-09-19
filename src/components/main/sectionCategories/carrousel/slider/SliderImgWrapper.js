import { useContext } from 'react'
import { Image } from 'pure-react-carousel';
import { RiSignalWifiErrorFill } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import SliderContext from '../../../../../context/SliderContext';
import Scroll from 'react-scroll'
import navigationSliderHelper from '../../../../../helpers/navigationSliderHelper';

export default function SliderImgWrapper({ active, data }){

  const { setExtraData } = useContext(SliderContext)

  let screenImgWidth = window.innerWidth < 600 ? data.poster_path : data.backdrop_path

  const scroll = Scroll.animateScroll

  const navigate = useNavigate()

  const location = useLocation()

  function handleClick(){

    setExtraData(data)

    navigationSliderHelper({ location, dataId: data.id, navigate })

    scroll.scrollToTop()
  } 

  function skeletonLoader(){
    return (
      <div className='object-cover object-center animate-pulse w-36 h-56 sm:h-imgSliderHeightMedium lg:h-imgSliderHeight bg-gray-tones-200 rounded'>
      </div>
    )
  }

  function skeletonError(){
    return (
      <div className='object-cover object-center flex items-center justify-center animate-pulse w-36 h-56 sm:h-imgSliderHeightMedium lg:h-imgSliderHeight bg-gray-tones-200 rounded'>
        <RiSignalWifiErrorFill className='text-red-tones-600 text-4xl' />
      </div>
    )
  }

  return (
    <div onClick={handleClick}>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${screenImgWidth}`} 
        alt="black chair and white table" 
        className={` object-cover object-center w-full ${active ? 'rounded-t' : 'rounded'} opacity-85`}
        renderError={skeletonError}
        renderLoading={skeletonLoader}
      />
      <h6 className={`absolute hidden sm:flex sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
        sm:text-s font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
        leading-none`}
      >
        {data.title}
      </h6>
    </div>
  )
}