import React, { useContext } from 'react'
import Scroll from 'react-scroll'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import SliderDetailsSectionBtn from './SliderDetailsSectionBtn'
import SliderDetailsSectionExtra from "./SliderDetailsSectionExtra";
import SliderDetailsSectionGenres from "./SliderDetailsSectionGenres";
import SliderContext from '../../../../../context/SliderContext';

export default function SliderDetailsSection({ data }){

  const { setExtraData } = useContext(SliderContext)

  const scroll = Scroll.animateScroll

  const navigate = useNavigate()

  function handleClick(){
    setExtraData(data)
    navigate(`${data.id}`)
    scroll.scrollToTop()
  } 

  return (
    <div className={`z-300 absolute -bottom-20 lg:py-2 lg:px-3 bg-gray-tones-450 w-full rounded-b h-20 transition ease-in-out duration-500`}>
      <div className="flex-row flex justify-between w-full ml-1">
        <SliderDetailsSectionBtn />
        <div className="mr-2 w-6 hs-6 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-1 ring-gray-tones-50 hover:ring-gray-tones-10">
          <MdKeyboardArrowDown 
            className='text-gray-tones-10 text-xl mt-0.5'
            onClick={handleClick} 
          />
        </div>
      </div>
      <SliderDetailsSectionExtra type={data.media_type} date={data.release_date} rate={data.popularity} />
      <SliderDetailsSectionGenres genres={data.genre_ids} />
    </div>
  )
}