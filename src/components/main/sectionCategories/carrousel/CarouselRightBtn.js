import { ButtonNext } from 'pure-react-carousel';
import rightArrow from '../../../../images/rightArrow.svg'
import useMouseOver from '../../../../hooks/useMouseOver';

export default function CarouselRightBtn({ showArrow, handleShowArrow, handleBeforeValue }){

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()
  
  const handleClick = () => {
    handleShowArrow()
    handleBeforeValue()
  }

  return (
    <ButtonNext 
      role="button" 
      aria-label="slide backward" 
      className={`${showArrow ? 'block' : 'hidden'} w-5 sm:w-7 lg:w-12 h-full m-0 absolute z-30 right-0 lg:pl-3 sm:pl-1 pl-1
      hover:bg-gray-tones-200 hover:bg-opacity-20 transition ease-out duration-200 rounded-l`} 
      id="prev"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={rightArrow}
        alt='rightArrow' 
        className={`w-3 h-4 sm:w-4 sm:h-5 lg:w-5 lg:h-6 ${mouseOver ? 'scale-125' : ''}  shadow-sm transition ease-out duration-200`} 
      />
    </ButtonNext>
  )
}