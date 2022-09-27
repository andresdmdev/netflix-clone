import { BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

export default function SliderDetailsRating({ dataId, large = false }){

  const userRating = JSON.parse(localStorage.getItem('user-rating'))

  let icon = <BsHandThumbsUp className={`${large ? 'text-tiny' : 'text-xl'} text-gray-tones-10 animate-like`} />

  const findItem = userRating && userRating.find(elem => elem.id === dataId)

  if(findItem && findItem.user_rating === 'like'){
  
    icon = <BsHandThumbsUpFill className={`${large ? 'text-tiny' : 'text-xl'} text-gray-tones-10 animate-like`} />

  } else if(findItem && findItem.user_rating === 'dislike'){

    icon = <BsHandThumbsDownFill className={`${large ? 'text-tiny' : 'text-xl'} text-gray-tones-10`} />

  } else if(findItem && findItem.user_rating === 'love'){

    icon = <FcLike className={`${large ? 'text-tiny' : 'text-xl'} text-gray-tones-10 brightness-75 rounded-full`} />

  }

  return (
    <>
      {
        icon
      }
    </>
  )
}