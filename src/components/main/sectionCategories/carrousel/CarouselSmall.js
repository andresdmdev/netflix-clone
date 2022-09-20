import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CarouselLeftBtn from './CarouselLeftBtn';
import CarouselRightBtn from './CarouselRightBtn';

export default function CarouselSmall(props){
  return (
    <>
      {/* Carousel for movil and small size devices */}
      <CarouselProvider 
        className="block sm:hidden w-full" 
        naturalSlideWidth={240} 
        naturalSlideHeight={257} 
        isIntrinsicHeight={true} 
        totalSlides={10} 
        visibleSlides={2.2} 
        step={2} 
        infinite={true}
      >
          <div 
            className="w-full relative flex items-center justify-center" 
            onMouseEnter={props.handleArrow}
            onMouseLeave={props.handleReset}
          >
              <CarouselLeftBtn showArrow={props.left} />
              <div className="w-full h-64 mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                      <div id="slider" className="h-full flex lg:gap-1.4 sm:gap-0.75 gap-0.75 items-center justify-start transition ease-in-out duration-1100">
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