import React from 'react'
import { useContext } from 'react'
import SliderContext from "../../../context/SliderContext"
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useFilmVideo from '../../../hooks/useFilmVideo';
import SliderLargeMedia from './SliderLargeMedia';
import SliderLargeInfo from './SliderLargeInfo';
import { SliderLargeTrailerContext } from '../../../context/SliderLargeTrailerContext';
import { useSelector } from 'react-redux';
import { keyword } from '../../../services/slices/searchKeywordReducerSlices';
import navigationSliderLargeHelper from '../../../helpers/navigationSliderLargeHelper';

export default function SliderLarge(){

  const { extraData } = useContext(SliderContext)

  console.log(extraData)

  const navigate = useNavigate()

  const keywordValue = useSelector(keyword)

  const { url } = useFilmVideo({ type: extraData.media_type, id: extraData.id, active: true })

  function handleCloseBtn(){

    navigationSliderLargeHelper({ navigate, keywordValue })
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div onClick={handleCloseBtn} className="w-full h-full overflow-hidden bg-gray-tones-500 bg-opacity-80 brightness-80 fixed inset-0 z-400 top-0 left-0">
      </div>
      <div className="relative w-96.5 sm:w-sliderLarge lg:w-sliderLarge sm:h-11/12 lg:h-full flex justify-center z-500 mt-6 sm:mt-10 lg:mt-0">
        <div
          onClick={handleCloseBtn} 
          className={`z-500 absolute -top-3 right-4 sm:-top-8 sm:right-4 hover:ring-2 rounded-full cursor-pointer 
          ring-gray-tones-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-tones-500 bg-opacity-60`}>
          <IoMdClose className='w-6 h-6 text-gray-tones-10' />
        </div>
        <SliderLargeTrailerContext>
          <SliderLargeMedia 
            backdropImg={extraData.backdrop_path} 
            url={url} 
          />
          <SliderLargeInfo 
            extraData={extraData} 
            url={url}
          />
        </SliderLargeTrailerContext>
      </div>
    </div>
  )
}