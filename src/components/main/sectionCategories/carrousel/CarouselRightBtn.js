import {useState} from 'react'
import { ButtonNext } from 'pure-react-carousel';
import rightArrow from '../../../../images/rightArrow.svg'

export default function CarouselRightBtn({ showArrow, handleShowArrow, handleBeforeValue }){

  const [arrow, setArrow] = useState(false)

  function handleMouseEnter(event){
    event.stopPropagation()
    setArrow(true)
  }

  function handleMouseLeave(event){
    event.stopPropagation()
    setArrow(false)
  }
  
  const handleClick = () => {
    handleShowArrow()
    handleBeforeValue()
  }

  return (
    <ButtonNext 
      role="button" 
      aria-label="slide backward" 
      className={`${showArrow ? 'block' : 'hidden'} w-5 sm:w-7 lg:w-10 h-full absolute z-30 right-0 lg:pr-2 sm:pr-1 pr-1
      hover:bg-gray-tones-500 hover:bg-opacity-20 transition ease-out duration-200 rounded-l`} 
      id="prev"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={rightArrow}
        alt='rightArrow' 
        className={`w-3 h-4 sm:w-4 sm:h-5 lg:w-5 lg:h-6 ${arrow ? 'scale-125' : ''}  shadow-sm transition ease-out duration-200`} 
      />
    </ButtonNext>
  )
}