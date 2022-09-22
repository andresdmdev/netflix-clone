import { BsFillPlayFill } from "react-icons/bs";
import SliderDetailsSectionAddListBtn from "./features/SliderDetailsSectionAddListBtn";
import SliderDetailsSectionBtnOptions from "./SliderDetailsSectionBtnOptions";

export default function SliderDetailsSectionBtn({ data }){

  return (
    <div className={`flex-row flex gap-2 relative`}>
      <div className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center bg-gray-tones-10 hover:brightness-75 `}>
        <BsFillPlayFill className={`text-base text-gray-tones-500 ml-0.5`} />
      </div>
      <SliderDetailsSectionAddListBtn data={data} />
      <SliderDetailsSectionBtnOptions data={data} />
    </div>
  )
}