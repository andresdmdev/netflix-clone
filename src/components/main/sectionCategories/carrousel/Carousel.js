import React from 'react'
import { SliderCarousel } from './Slider';
import useArrowCarousel from '../../../../hooks/useArrowCarousel';
import CarouselLarge from './CarouselLarge';
import CarouselMedium from './CarouselMedium';
import CarouselSmall from './CarouselSmall';

export const Carousel = React.memo(({ dataFilms }) => {

  const { 
    left, 
    right, 
    beforeValue, 
    updateBeforeValue,
    updateLeftArrow, 
    updateRightArrow, 
    reset 
  } = useArrowCarousel()

  const handleArrow = (event) => {
    event.stopPropagation()
    updateRightArrow()
    if(beforeValue){
      updateLeftArrow()
    }
  }

  const handleReset = (event) => {
    event.stopPropagation()
    reset()
  }

  const allData = dataFilms.map((elem, index) => (
    <SliderCarousel index={index} data={elem} key={elem.id} />
  ))

  return (
    <>
      <CarouselLarge 
        handleArrow={handleArrow}
        handleReset={handleReset}
        left={left}
        allData={allData}
        right={right}
        updateLeftArrow={updateLeftArrow}
        updateBeforeValue ={updateBeforeValue}
      />

     <CarouselMedium 
        handleArrow={handleArrow}
        handleReset={handleReset}
        left={left}
        allData={allData}
        right={right}
        updateLeftArrow={updateLeftArrow}
        updateBeforeValue ={updateBeforeValue}
      />

      <CarouselSmall 
        handleArrow={handleArrow}
        handleReset={handleReset}
        left={left}
        allData={allData}
        right={right}
        updateLeftArrow={updateLeftArrow}
        updateBeforeValue ={updateBeforeValue}
      />
    </>
  )
})

export default Carousel