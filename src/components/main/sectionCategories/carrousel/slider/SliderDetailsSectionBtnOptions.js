import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import useMouseOver from '../../../../../hooks/useMouseOver';

export default function SliderDetailsSectionBtnOptions(){

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-6 h-6 cursor-pointer rounded-full flex items-center 
      justify-center bg-gray-tones-300 ring-1 bg-opacity-50 ring-gray-tones-50
      hover:ring-gray-tones-10`}
    >
      <AiOutlineLike className={`text-tiny text-gray-tones-10`} />
      {
        mouseOver &&
          <div 
            className={`w-6 h-2 bg-gray-tones-450 animate-fade flex gap-0.5 pl-0.25 items-center flex-row
            rounded-full z-300 absolute shadow`}
          >
            <div 
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
            >
              <AiOutlineLike className={`text-mini text-gray-tones-10 rotate-180`} />
            </div>
            <div 
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
            >
              <AiOutlineLike className={`text-mini text-gray-tones-10`} />
            </div>
            <div 
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
            >
              <FcLike className={`text-mini text-gray-tones-10 brightness-75 rounded-full`} />
            </div>  
          </div>
      }
    </div>
  )
}