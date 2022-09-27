import { useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addFilmToFavorite, deleteFilmFromFavorite, favoriteListData } from '../../../services/slices/favoriteListReducerSlices';
import SliderContext from "../../../context/SliderContext";

export default function SliderLargeDetailsSectionBtnFavorites(){

  const { extraData } = useContext(SliderContext)

  const dispatch = useDispatch()
  const favoriteList = useSelector(favoriteListData)

  const findFilmData = favoriteList.find(film => film.id === extraData.id)

  function handleClickBtn(){

    if(findFilmData){

      dispatch(deleteFilmFromFavorite(extraData.id))

    } else {

      dispatch(addFilmToFavorite(extraData))

    }

  }

  return (
    <div 
      onClick={handleClickBtn}
      className={`w-8 h-8 mr-4 sm:w-10 sm:h-10 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-2 
        bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
      {
        findFilmData ? 
        <BsCheckLg className={`text-base sm:text-xl mr-0.1 mt:0.5 sm:mt-0.35 text-gray-tones-10`} /> 
        : 
        <AiOutlinePlus className={`text-2xl text-gray-tones-10`} />
      }
    </div>
  )
}