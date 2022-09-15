import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CarouselLeftBtn from './CarouselLeftBtn';
import CarouselRightBtn from './CarouselRightBtn';

export default function CarouselMedium(props){
  return (
    <>
       {/* Carousel for tablets and medium size devices */}
       <CarouselProvider 
        className="hidden sm:block md:block lg:hidden w-full h-28" 
        naturalSlideWidth={240} 
        naturalSlideHeight={140} 
        isIntrinsicHeight={true} 
        totalSlides={20} 
        visibleSlides={4.2} 
        step={4} 
        infinite={true}
      >
          <div 
            className="w-full h-full items-center justify-center flex relative" 
            onMouseEnter={props.handleArrow}
            onMouseLeave={props.handleReset}
          >
              <CarouselLeftBtn showArrow={props.left} />
              <div className="w-full h-full mx-auto">
                  <Slider style={{ 'overflowY': 'visible', 'overflowX': 'clip' }}>
                      <div id="slider" className="w-full h-full flex lg:gap-1.4 md:gap-1.2 gap-1 items-center justify-start transition ease-in-out duration-1100">
                        {props.allData}
                      </div>
                  </Slider>
              </div>
              <CarouselRightBtn 
                showArrow={props.right} 
                handleShowArrow={props.updateLeftArrow} 
                handleBeforeValue={props.updateBeforeValue} />
          </div>
      </CarouselProvider>
    </>
  )
}