import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill,BsFillPauseFill } from "react-icons/bs";
import SliderDetailsSectionBtnOptions from "./SliderDetailsSectionBtnOptions";

export default function SliderDetailsSectionBtn({ large = false, setPlayVideo, showVideo }){


  return (
    <div className={`flex-row flex ${large ? 'gap-4' : 'gap-2'} relative`}>
      {
        large ?
        <>
          {
            showVideo ?
            <div 
              onClick={() => setPlayVideo(false)}
              className={`w-44 h-10 rounded cursor-pointer flex items-center justify-start bg-gray-tones-10 hover:brightness-75`}>
              <BsFillPauseFill className={`text-4xl text-gray-tones-500 ml-4 mr-1.5`} />
              <p className="text-base font-semibold">Pause</p>
            </div>
            :
            <div 
              onClick={() => setPlayVideo(true)}
              className={`w-44 h-10 rounded cursor-pointer flex items-center justify-start bg-gray-tones-10 hover:brightness-75`}>
              <BsFillPlayFill className={`text-4xl text-gray-tones-500 ml-4 mr-1.5`} />
              <p className="text-base font-semibold">Play</p>
            </div>
          }
        </> : 
        <div className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center bg-gray-tones-10 hover:brightness-75 `}>
          <BsFillPlayFill className={`text-base text-gray-tones-500 ml-0.5`} />
        </div>
      }
      
      <div className={`${large ? 'w-10 h-10' : 'w-6 h-6'} cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ${large ? 'ring-2' : 'ring-1'} bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
        <AiOutlinePlus className={`${large ? 'text-2xl' : 'text-base'} text-gray-tones-10`} />
      </div>
      <SliderDetailsSectionBtnOptions large={large} />
    </div>
  )
}