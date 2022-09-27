import React from 'react'
import { Slide } from 'pure-react-carousel';
import smallLogo from '../../../../../images/small-logo.svg'
import SliderImgWrapper from './SliderImgWrapper';
import useMouseOver from '../../../../../hooks/useMouseOver';
import SliderDetailsSection from './SliderDetailsSection';

export const SliderWrapper = React.memo(({ index, data }) => {

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  return (
    <>
      <Slide 
        index={index} 
        className={`transition ease-in-out delay-200 duration-300
          hover:z-300 sm:hover:scale-125 sm:first:hover:translate-x-8 
          lg:hover:scale-150 lg:hover:-translate-y-20
          lg:first:hover:translate-x-14 lg:child(6):hover:-translate-x-10 lg:last:hover:-translate-x-20
          lg:child(7):hover:translate-x-14 lg:child(13):hover:translate-x-14 lg:w-imgSliderWidth lg:h-imgSliderHeight`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`flex flex-col relative w-full sm:w-full ${mouseOver && 'drop-shadow-md'}`}
            >
              <SliderImgWrapper active={mouseOver} data={data} />
              {
                data.title.length < 20 &&
                <img src={smallLogo} alt='netflixLogo' className='w-4.5 sm:w-4 lg:w-6 absolute top-1.5 left-1 sm:top-1.5 sm:left-1 lg:top-2 lg:left-1' />
              }
              {
                mouseOver &&
                <SliderDetailsSection data={data} />
              }
          </div>
      </Slide>
    </>
  )
})

export default SliderWrapper