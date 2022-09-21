import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import useTrailerVideo from "../../../hooks/useTrailerVideo";
import SliderLargeDetailsSectionBtnOptions from "./SliderLargeDetailsSectionBtnOptions";

export default function SliderLargeDetailsSectionBtn(){

  const { showTrailer, playTrailer, stopTrailer } = useTrailerVideo()

  return (
    <div className={`flex-row flex gap-4 relative`}>
      {
        showTrailer ?
        <div 
          onClick={stopTrailer}
          className={`w-26 h-8 sm:w-44 sm:h-10 rounded cursor-pointer flex items-center justify-start bg-gray-tones-10 hover:brightness-75`}>
          <BsFillPauseFill className={`text-3xl sm:text-4xl text-gray-tones-500 ml-2 sm:ml-4 mr-0.75 sm:mr-1.5`} />
          <p className="text-base font-semibold">Pause</p>
        </div>
        :
        <div 
          onClick={playTrailer}
          className={`w-26 h-8 sm:w-44 sm:h-10 rounded cursor-pointer flex items-center justify-start bg-gray-tones-10 hover:brightness-75`}>
          <BsFillPlayFill className={`text-3xl sm:text-4xl text-gray-tones-500 ml-2 sm:ml-4 mr-0.75 sm:mr-1.5`} />
          <p className="text-base font-semibold">Play</p>
        </div>
      }
      <div className={`w-8 h-8 sm:w-10 sm:h-10 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-2 bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
        <AiOutlinePlus className={`text-2xl text-gray-tones-10`} />
      </div>
      <SliderLargeDetailsSectionBtnOptions />
    </div>
  )
}