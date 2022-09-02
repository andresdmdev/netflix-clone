import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CarouselLeftBtn from './CarouselLeftBtn';
import CarouselRightBtn from './CarouselRightBtn';

export default function CarouselMedium(props){
  return (
    <>
       {/* Carousel for tablets and medium size devices */}
       <CarouselProvider 
        className="hidden sm:block md:block lg:hidden" 
        naturalSlideWidth={240} 
        naturalSlideHeight={140} 
        isIntrinsicHeight={true} 
        totalSlides={20} 
        visibleSlides={4.2} 
        step={4} 
        infinite={true}
      >
          <div 
            className="w-full relative flex items-center justify-center" 
            onMouseEnter={props.handleArrow}
            onMouseLeave={props.handleReset}
          >
              <CarouselLeftBtn showArrow={props.left} />
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                      <div id="slider" className="h-full flex lg:gap-1.4 sm:gap-0.75 gap-1 items-center justify-start transition ease-in-out duration-1100">
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