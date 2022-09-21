import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import SliderDetailsSectionBtnOptions from "./SliderDetailsSectionBtnOptions";

export default function SliderDetailsSectionBtn({ data }){

  return (
    <div className={`flex-row flex gap-2 relative`}>
      <div className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center bg-gray-tones-10 hover:brightness-75 `}>
        <BsFillPlayFill className={`text-base text-gray-tones-500 ml-0.5`} />
      </div>
      <div className={`w-6 h-6 cursor-pointer rounded-full flex items-center justify-center bg-gray-tones-300 ring-1 bg-opacity-50 ring-gray-tones-50 hover:ring-gray-tones-10`}>
        <AiOutlinePlus className={`text-base text-gray-tones-10`} />
      </div>
      <SliderDetailsSectionBtnOptions data={data} />
    </div>
  )
}