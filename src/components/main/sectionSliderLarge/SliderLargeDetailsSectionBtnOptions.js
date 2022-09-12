import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import useMouseOver from '../../../hooks/useMouseOver';

export default function SliderLargeDetailsSectionBtnOptions(){

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer rounded-full flex items-center 
      justify-center bg-gray-tones-300 ring-2 bg-opacity-50 ring-gray-tones-50
      hover:ring-gray-tones-10`}
    >
      <AiOutlineLike className={`text-xl mb-0.5 text-gray-tones-10`} />
      {
        mouseOver &&
          <div 
            className={`w-10 h-3.75 bg-gray-tones-450 animate-fade 
            rounded-full z-300 absolute shadow`}
          >
            <div 
              className={`w-2.75 h-2.75 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50 absolute top-0.5 left-0.5`}
            >
              <AiOutlineLike className={`text-ss mt-0.25 text-gray-tones-10 rotate-180`} />
            </div>
            <div 
              className={`w-2.75 h-2.75 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50 absolute top-0.5 left-3.5`}
            >
              <AiOutlineLike className={`text-ss ml-0.15 text-gray-tones-10`} />
            </div>
            <div 
              className={`w-2.75 h-2.75 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50 absolute top-0.5 left-6.25`}
            >
              <FcLike className={`text-xss text-gray-tones-10 brightness-75 rounded-full`} />
            </div>
          </div> 
      }
    </div>
  )
}