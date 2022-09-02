import React from 'react'
import { Slide, Image } from 'pure-react-carousel';
import smallLogo from '../../../../images/small-logo.svg'

export const SliderCarousel = React.memo(({ index, data }) => {

  const skeletonLoader = ({ error }) => (
    <div className='object-cover object-center animate-pulse lg:w-imgSliderWidth lg:h-imgSliderHeight bg-gray-tones-500 rounded'>
      { error ? 'Error loading image' : 'Movie Name'}
    </div>  
  )
  
  return (
    <Slide index={index}>
        <div className="flex flex-shrink-0 relative w-auto sm:w-auto rounded">
            <Image 
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} 
              alt="black chair and white table" 
              className="object-cover object-center w-full rounded opacity-85"
              renderError={skeletonLoader({ error: true })}
              renderLoading={skeletonLoader({ error: false })}
            />
            {
              data.title.length < 20 &&
              <img src={smallLogo} alt='netflixLogo' className='w-4.5 sm:w-4 lg:w-6 absolute top-1.5 left-1 sm:top-1.5 sm:left-1 lg:top-2 lg:left-1' />
            }
            <h6 className={`absolute bottom-1 sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
            sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
            leading-none`}
            >
              {data.title}
            </h6>
        </div>
    </Slide>
  )
})

export default SliderCarousel