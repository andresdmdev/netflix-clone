import React from 'react'
import { useContext } from 'react'
import SliderContext from "../../../context/SliderContext"
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useFilmVideo from '../../../hooks/useFilmVideo'
import useTrailerVideo from '../../../hooks/useTrailerVideo'
import SliderLargeMedia from './SliderLargeMedia';
import SliderLargeInfo from './SliderLargeInfo';

export default function SliderLarge(){

  const { extraData } = useContext(SliderContext)

  const { showVideo, setPlayVideo } = useTrailerVideo({ trailer: true })

  const navigate = useNavigate()

  const { url } = useFilmVideo({ type: extraData.media_type, id: extraData.id, active: true })

  function handleCloseBtn(){
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center'>
      <div onClick={handleCloseBtn} className="w-full h-full overflow-hidden bg-gray-tones-500 bg-opacity-80 brightness-80 fixed inset-0 z-300 top-0 left-0">
      </div>
      <div className="relative w-sliderLarge min-h-full flex justify-center z-300">
        <div
          onClick={handleCloseBtn} 
          className='absolute -top-8 right-4 hover:ring-2 rounded-full z-300 cursor-pointer ring-gray-tones-10 w-10 h-10 flex items-center justify-center bg-gray-tones-500 bg-opacity-60'>
          <IoMdClose className='w-6 h-6 text-gray-tones-10' />
        </div>
        <SliderLargeMedia 
          backdropImg={extraData.backdrop_path} 
          url={url} 
          showVideo={showVideo} 
        />
        <SliderLargeInfo 
          extraData={extraData} 
          url={url} 
          showVideo={showVideo} 
          setPlayVideo={setPlayVideo} 
        />
      </div>
    </div>
  )
}