import { useContext } from 'react'
import { Image } from 'pure-react-carousel';
import { RiSignalWifiErrorFill } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import SliderContext from '../../../../../context/SliderContext';
import Scroll from 'react-scroll'

export default function SliderImgWrapper({ active, data }){

  const { setExtraData } = useContext(SliderContext)

  const scroll = Scroll.animateScroll

  const navigate = useNavigate()

  const location = useLocation()

  const helper = location.pathname.split('/')
  const value = helper[helper.length - 1]

  function handleClick(){

    setExtraData(data)

    if(location.pathname.startsWith('/movies')){
    
      sessionStorage.setItem('mediaType', 'movies')
      sessionStorage.setItem('genre', value)
  
      navigate(`/movies/film/${data.id}`)
  
    } else if (location.pathname.startsWith('/tv')) {
  
      sessionStorage.setItem('mediaType', 'tv')
      sessionStorage.setItem('genre', value)
  
      navigate(`/tv/film/${data.id}`)

    } else {
      sessionStorage.setItem('mediaType', '/')
      sessionStorage.setItem('genre', '/')
  
      navigate(`/${data.id}`)
    }

    scroll.scrollToTop()
  } 

  function skeletonLoader(){
    return (
      <div className='object-cover object-center animate-pulse w-44 h-24 sm:h-imgSliderHeightMedium lg:h-imgSliderHeight bg-gray-tones-200 rounded'>
      </div>
    )
  }

  function skeletonError(){
    return (
      <div className='object-cover object-center flex items-center justify-center animate-pulse w-auto h-imgSliderHeightSmall sm:h-imgSliderHeightMedium lg:h-imgSliderHeight bg-gray-tones-200 rounded'>
        <RiSignalWifiErrorFill className='text-red-tones-600 text-4xl' />
      </div>
    )
  }

  return (
    <div onClick={handleClick}>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} 
        alt="black chair and white table" 
        className={` object-cover object-center w-full ${active ? 'rounded-t' : 'rounded'} opacity-85`}
        renderError={skeletonError}
        renderLoading={skeletonLoader}
      />
      <h6 className={`absolute bottom-1 sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
        sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
        leading-none`}
      >
        {data.title}
      </h6>
    </div>
  )
}