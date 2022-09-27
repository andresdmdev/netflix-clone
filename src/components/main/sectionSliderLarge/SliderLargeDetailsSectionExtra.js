import { MdDateRange, MdMovie } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { HiStar } from "react-icons/hi";

export default function SliderDetailsSectionExtra({ type, date, rate }){
  return (
    <div className={`flex flex-row items-center justify-start mt-6 sm:mt-8 lg:mt-10mb-0`}>
      <div className="flex items-center justify-center mr-3">
        {
          type === 'movie' 
          ?
          <MdMovie className={`sm:text-2xl lg:text-3xl text-gray-tones-10`} /> 
          :
          <TbMovie className={`sm:text-2xl lg:text-3xl text-gray-tones-10`} />
        }
        <p className={`text-sm sm:text-sm sm:font-semibold lg:text-tiny lg:font-bold ml-0.5 text-gray-tones-10 uppercase`}>
          {type === 'tv' ? 'TV SHOW' : 'MOVIE'}
        </p>
      </div>
      <div className="flex items-center justify-center mr-3">
        <MdDateRange className={`sm:text-tiny lg:text-base text-gray-tones-10 `} />
        <p className={`text-sm sm:text-sm sm:font-semibold lg:text-tiny ml-0.5 lg:font-bold  text-gray-tones-10`}>
          {date}
        </p>
      </div>
      <div className="flex items-center justify-center mr-3">
        <HiStar className={`sm:text-tiny lg:text-base text-gray-tones-10 `} />
        <p className={`text-sm sm:text-sm sm:font-semibold lg:text-tiny ml-0.5 lg:font-bold  text-gray-tones-10`}>
          {Math.floor(rate)}
        </p>
      </div>
    </div>
  )
}