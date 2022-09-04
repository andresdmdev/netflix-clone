import { useState } from 'react'
import { Image } from 'pure-react-carousel';

export default function SliderImgWrapper({ url }){

  const [showDetails, setShowDetails] = useState(false)

  const skeletonLoader = ({ error }) => (
    <div className='object-cover object-center animate-pulse lg:w-imgSliderWidth lg:h-imgSliderHeight bg-gray-tones-500 rounded'>
      { error ? 'Error loading image' : 'Movie Name'}
    </div>  
  )

  function handleMouseOver(){
    setShowDetails(prevState => !prevState)
  }

  return (
    <>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${url}`} 
        alt="black chair and white table" 
        className={`${showDetails && ''} object-cover object-center w-full rounded opacity-85`}
        renderError={skeletonLoader({ error: true })}
        renderLoading={skeletonLoader({ error: false })}
        onMouseOver={handleMouseOver}
      />
    </>
  )
}