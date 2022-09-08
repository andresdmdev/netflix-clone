import { useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function SliderDetailsSectionBtnOptions({ large }){

  const [mouseOver, setMouseOver] = useState(false)

  function handleMouseEnter(e){
    e.stopPropagation()
    setMouseOver(true)
  }

  function handleMouseLeave(e){
    e.stopPropagation()
    setMouseOver(false)
  }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${large ? 'w-10 h-10' : 'w-6 h-6'} cursor-pointer rounded-full flex items-center 
      justify-center bg-gray-tones-300 ${large ? 'ring-2' : 'ring-1'} bg-opacity-50 ring-gray-tones-50
      hover:ring-gray-tones-10`}
    >
      <AiOutlineLike className={`${large ? 'text-xl mb-0.5' : 'text-tiny'} text-gray-tones-10`} />
      {
        mouseOver &&
          (
            large ?
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
            :
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
          )
      }
    </div>
  )
}