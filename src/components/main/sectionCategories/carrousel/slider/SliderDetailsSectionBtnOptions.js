import { useRef } from 'react'
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import userRatingFilm from '../../../../../helpers/userRatingFilm';
import useMouseOver from '../../../../../hooks/useMouseOver';
import SliderDetailsRating from './features/SliderDetailsRating';

export default function SliderDetailsSectionBtnOptions({ data }){

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  const likeRef = useRef()
  const dislikeRef = useRef()
  const loveRef = useRef()

  function hanldeClickLike(e){

    userRatingFilm({ data, ref: likeRef })
    
    handleMouseLeave()
  }

  function hanldeClickDislike(){

    userRatingFilm({ data, ref: dislikeRef })
    
    handleMouseLeave()
  }

  function hanldeClickLove(){

    userRatingFilm({ data, ref: loveRef })
    
    handleMouseLeave()
  }

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-6 h-6 cursor-pointer rounded-full flex items-center 
      justify-center bg-gray-tones-300 ring-1 bg-opacity-50 ring-gray-tones-50
      hover:ring-gray-tones-10`}
    >

      <SliderDetailsRating dataId={data.id} large={true} />

      {
        mouseOver &&
          <div 
            className={`w-6 h-2 bg-gray-tones-450 delay-200 animate-fade flex gap-0.5 pl-0.25 items-center flex-row
            rounded-full z-300 absolute shadow`}
          >
            <div 
              ref={dislikeRef}
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
              id='dislike'
              onClick={hanldeClickDislike}
            >
              <BsHandThumbsDown 
                className={`text-mini text-gray-tones-10`} 
              />
            </div>
            <div 
              ref={likeRef}
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
              id='like'
              onClick={hanldeClickLike}
            >
              <BsHandThumbsUp 
                className={`text-mini text-gray-tones-10`} 
              />
            </div>
            <div 
              ref={loveRef}
              className={`w-1.5 h-1.5 cursor-pointer rounded-full flex items-center 
              justify-center hover:bg-gray-tones-400 bg-opacity-50`}
              id='love'
              onClick={hanldeClickLove}
            >
              <FcLike 
                className={`text-mini text-gray-tones-10 brightness-75 rounded-full`}
              />
            </div>  
          </div>
      }
    </div>
  )
}