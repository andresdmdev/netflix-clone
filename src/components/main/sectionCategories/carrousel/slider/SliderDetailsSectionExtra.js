import { MdDateRange, MdMovie } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { HiStar } from "react-icons/hi";

export default function SliderDetailsSectionExtra({ type, date, rate, large = false }){
  return (
    <div className={`flex flex-row items-center justify-start gap-3 ${large ? 'mt-14' : 'mt-2 mx-1'} mb-0`}>
      <div className="flex items-center justify-center gap-0.5">
        {
          type === 'movie' 
          ?
          <MdMovie className={`${large ? 'text-3xl' : 'text-xs'} text-gray-tones-10 `} /> 
          :
          <TbMovie className={`${large ? 'text-3xl' : 'text-xs'} text-gray-tones-10 `} />
        }
        <p className={`${large ? 'text-tiny font-bold' : 'text-ss font-medium'}  text-gray-tones-10 uppercase`}>
          {type === 'tv' ? 'TV SHOW' : 'MOVIE'}
        </p>
      </div>
      <div className="flex items-center justify-center gap-0.5">
        <MdDateRange className={`${large ? 'text-base' : 'text-s'} text-gray-tones-10 `} />
        <p className={`${large ? 'text-tiny font-bold' : 'text-ss font-medium'}  text-gray-tones-10`}>
          {date}
        </p>
      </div>
      <div className="flex items-center justify-center gap-0.5">
        <HiStar className={`${large ? 'text-base' : 'text-s'} text-gray-tones-10 `} />
        <p className={`${large ? 'text-tiny font-bold' : 'text-ss font-medium'}  text-gray-tones-10`}>
          {Math.floor(rate)}
        </p>
      </div>
    </div>
  )
}