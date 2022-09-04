import React from 'react'
import { Slide } from 'pure-react-carousel';
import smallLogo from '../../../../../images/small-logo.svg'
import SliderImgWrapper from './SliderImgWrapper';

export const SliderCarousel = React.memo(({ index, data }) => {

  return (
    <Slide index={index} className={`transition ease-in-out delay-200 duration-300  
    hover:z-1000 sm:hover:scale-125 sm:first:hover:translate-x-8 lg:hover:scale-140 lg:hover:-translate-y-20 
    lg:first:hover:translate-x-12 lg:child(6):hover:-translate-x-10 lg:last:hover:-translate-x-20
    lg:child(7):hover:translate-x-12 lg:child(13):hover:translate-x-12`}>
        <div className="flex flex-shrink-0 relative w-full sm:w-full">
            <SliderImgWrapper url={data.backdrop_path} />
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