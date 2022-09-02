import { useState } from 'react'
import { ButtonBack } from 'pure-react-carousel';
import leftArrow from '../../../../images/leftArrow.svg'

export default function CarouselLeftBtn({ showArrow }){

  const [arrow, setArrow] = useState(false)

  function handleMouseEnter(event){
    event.stopPropagation()
    setArrow(true)
  }

  function handleMouseLeave(event){
    event.stopPropagation()
    setArrow(false)
  }

  return (
    <ButtonBack 
      role="button" 
      aria-label="slide backward" 
      className={`${showArrow ? 'block' : 'hidden'} w-5 sm:w-7 lg:w-10 h-full m-0 absolute z-30 left-0 
      lg:pl-2 sm:pl-1 pl-1 hover:bg-gray-tones-500 hover:bg-opacity-20 rounded-r
      transition ease-out duration-200`} 
      id="prev"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={leftArrow}
        alt='leftArrow' 
        className={`w-3 h-4 sm:w-4 sm:h-5 lg:w-5 lg:h-6 ${arrow ? 'scale-125' : ''} shadow-sm transition ease-out duration-200`} 
      />
    </ButtonBack>
  )
}