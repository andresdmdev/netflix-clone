import React from 'react'
import SliderCarousel from './slider/Slider';
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

  const handleArrow = () => {
    updateRightArrow()
    if(beforeValue){
      updateLeftArrow()
    }
  }

  const handleReset = () => {
    reset()
  }

  const allData = dataFilms.map((elem, index) => (
    <SliderCarousel index={index} data={elem} key={elem.id} />
  ))

  const allDataMovil = allData.slice(0, 10)

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
        allData={allDataMovil}
        right={right}
        updateLeftArrow={updateLeftArrow}
        updateBeforeValue ={updateBeforeValue}
      />
    </>
  )
})

export default Carousel