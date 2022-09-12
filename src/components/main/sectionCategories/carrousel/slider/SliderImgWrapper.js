import { useContext } from 'react'
import { Image } from 'pure-react-carousel';
import { useNavigate } from 'react-router-dom';
import SliderContext from '../../../../../context/SliderContext';
import Scroll from 'react-scroll'

export default function SliderImgWrapper({ active, data }){

  const { setExtraData } = useContext(SliderContext)

  const scroll = Scroll.animateScroll

  const navigate = useNavigate()

  function handleClick(){
    setExtraData(data)
    navigate(`/${data.id}`)
    scroll.scrollToTop()
  } 

  const skeletonLoader = ({ error }) => (
    <div className='object-cover object-center animate-pulse lg:w-imgSliderWidth lg:h-imgSliderHeight bg-gray-tones-500 rounded'>
      { error ? 'Error loading image' : 'Movie Name'}
    </div>  
  )

  return (
    <div onClick={handleClick}>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} 
        alt="black chair and white table" 
        className={` object-cover object-center w-full ${active ? 'rounded-t' : 'rounded'} opacity-85`}
        renderError={skeletonLoader({ error: true })}
        renderLoading={skeletonLoader({ error: false })}
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