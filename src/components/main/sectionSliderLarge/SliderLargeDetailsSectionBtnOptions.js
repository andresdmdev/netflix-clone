import { useContext, useRef } from 'react'
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import SliderContext from "../../../context/SliderContext";
import userRatingFilm from '../../../helpers/userRatingFilm';
import useMouseOver from '../../../hooks/useMouseOver';
import SliderDetailsRating from "../sectionCategories/carrousel/slider/features/SliderDetailsRating";

export default function SliderLargeDetailsSectionBtnOptions(){

  const { extraData } = useContext(SliderContext)

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  const likeRef = useRef()
  const dislikeRef = useRef()
  const loveRef = useRef()

  function hanldeClickLike(){

    userRatingFilm({ data: extraData, ref: likeRef })
    
    handleMouseLeave()
  }

  function hanldeClickDislike(){

    userRatingFilm({ data: extraData, ref: dislikeRef })
    
    handleMouseLeave()
  }

  function hanldeClickLove(){

    userRatingFilm({ data: extraData, ref: loveRef })
    
    handleMouseLeave()
  }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer rounded-full flex items-center 
      justify-center bg-gray-tones-300 ring-2 bg-opacity-50 ring-gray-tones-50
      hover:ring-gray-tones-10`}
    >
      <SliderDetailsRating dataId={extraData.id} />
      {
        mouseOver &&
          <div 
            className={`w-10 h-3.75 bg-gray-tones-450 animate-fade 
            rounded-full z-300 absolute shadow`}
          >
            <div 
              ref={dislikeRef}
              onClick={hanldeClickDislike}
              id='dislike'
              className={`w-2.75 h-2.75 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50 absolute top-0.5 left-0.5`}
            >
              <BsHandThumbsDown className={`text-ss mt-0.25 text-gray-tones-10`} />
            </div>
            <div 
              ref={likeRef}
              onClick={hanldeClickLike}
              id='like'
              className={`w-2.75 h-2.75 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50 absolute top-0.5 left-3.5`}
            >
              <BsHandThumbsUp className={`text-ss ml-0.15 text-gray-tones-10`} />
            </div>
            <div 
              ref={loveRef}
              onClick={hanldeClickLove}
              id='love'
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