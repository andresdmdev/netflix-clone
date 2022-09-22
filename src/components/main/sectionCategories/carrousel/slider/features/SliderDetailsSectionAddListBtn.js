import { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import userFilmData from "../../../../../../helpers/userFilmData";

export default function SliderDetailsSectionAddListBtn({ data }){

  const [addFilm, setAddFilm] = useState(false) 

  const validateLocaleStorage = JSON.parse(localStorage.getItem('user-list'))

  const findFilmData = validateLocaleStorage && validateLocaleStorage.find(film => film.id === data.id)

  let iconBtn = <AiOutlinePlus className={`text-base text-gray-tones-10`} />

  if(findFilmData && addFilm){
    iconBtn = <BsCheckLg className={`text-xs mr-0.1 mt-0.25 text-gray-tones-10`} />
  }

  function handleClickBtn(){
    userFilmData({ data })
    setAddFilm(prevState => !prevState) 
  }

  return (
    <div 
      onClick={handleClickBtn}
      className={`w-6 h-6 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-1 
        bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
      {
        iconBtn
      }
    </div>
  )
}