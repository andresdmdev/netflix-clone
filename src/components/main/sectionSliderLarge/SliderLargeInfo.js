import useTrailerVideo from '../../../hooks/useTrailerVideo'
import SliderLargeDetailsSectionBtn from './SliderLargeDetailSectionBtn'
import SliderLargeDetailsInfo from './SliderLargeDetailsInfo'
import SliderLargeDetailSectionExtra from './SliderLargeDetailsSectionExtra'
import SliderLargeDetailsSectionGenres from './SliderLargeDetailsSectionGenres'

export default function SliderLargeInfo({ extraData }){

  const { showTrailer } = useTrailerVideo()

  return (
    <div className={`absolute top-16 sm:top-44 lg:top-44 left-0 animate-delayShow shadow lg:w-full`}>
      <div className='relative flex flex-col'>
        {
          !showTrailer &&
          <h6 className={`text-gray-tones-10 text-tiny sm:text-base lg:text-xl absolute top-16 sm:top-5 z-300
            font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-4 py-1.5 lg:py-3 sm:py-2 lg:leading-3 
            leading-none`}
          >
            {extraData.title}
          </h6>
        }
        <div className='w-full h-16 bg-gradient-to-t from-gray-tones-500'>
        </div>
        <div className='w-full h-full bg-gray-tones-500 rounded-b-xl px-10 sm:px-12 pt-14 sm:pt-4 pb-12'>
          <SliderLargeDetailsSectionBtn />
          <SliderLargeDetailSectionExtra
            type={extraData.media_type} 
            date={extraData.release_date} 
            rate={extraData.popularity} 
          />
          <SliderLargeDetailsSectionGenres genres={extraData.genre_ids} />
          <SliderLargeDetailsInfo extraData={extraData} />
        </div>
      </div>
    </div>
  )
}