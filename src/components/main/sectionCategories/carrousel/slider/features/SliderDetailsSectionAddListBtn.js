import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addFilmToFavorite, deleteFilmFromFavorite, favoriteListData } from '../../../../../../services/slices/favoriteListReducerSlices';

export default function SliderDetailsSectionAddListBtn({ data }){

  const dispatch = useDispatch()
  const favoriteList = useSelector(favoriteListData)

  const findFilmData = favoriteList.find(film => film.id === data.id)

  function handleClickBtn(){

    if(findFilmData){

      dispatch(deleteFilmFromFavorite(data.id))

    } else {

      dispatch(addFilmToFavorite(data))

    }

  }

  return (
    <div 
      onClick={handleClickBtn}
      className={`w-6 h-6 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-1 
        bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
      {
        findFilmData ? 
        <BsCheckLg className={`text-xs mr-0.1 mt-0.25 text-gray-tones-10`} /> 
        : 
        <AiOutlinePlus className={`text-base text-gray-tones-10`} /> 
      }
    </div>
  )
}