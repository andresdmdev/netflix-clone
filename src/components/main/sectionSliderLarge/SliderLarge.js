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

export default function SliderLarge(){

  const { extraData } = useContext(SliderContext)

  const navigate = useNavigate()

  const keywordValue = useSelector(keyword)

  const storageMediaType = sessionStorage.getItem('mediaType')
  const storageGenreValue = sessionStorage.getItem('genre')

  const { url } = useFilmVideo({ type: extraData.media_type, id: extraData.id, active: true })

  function handleCloseBtn(){

    if(storageMediaType === 'movies/genre'){

      navigate(`/movies/genre/${storageGenreValue}`)

    } else if(storageMediaType === 'tv/genre') {

      navigate(`/tv/genre/${storageGenreValue}`)

    } else if(storageMediaType === 'movies'){

      navigate(`/movies`)

    } else if(storageMediaType === 'tv'){

      navigate(`/tv`)

    } else if(storageMediaType === 'search') {

      navigate(`/search/${keywordValue}`)

    } else {

      navigate('/')

    }
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div onClick={handleCloseBtn} className="w-full h-full overflow-hidden bg-gray-tones-500 bg-opacity-80 brightness-80 fixed inset-0 z-300 top-0 left-0">
      </div>
      <div className="relative w-96.5 sm:w-sliderLarge lg:w-sliderLarge sm:h-11/12 lg:h-full flex justify-center z-300 mt-20">
        <div
          onClick={handleCloseBtn} 
          className={`absolute -top-3 right-4 sm:-top-8 sm:right-4 hover:ring-2 rounded-full z-300 cursor-pointer 
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