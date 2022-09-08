import SliderDetailsSectionBtn from '../sectionCategories/carrousel/slider/SliderDetailsSectionBtn'
import SliderDetailsSectionExtra from '../sectionCategories/carrousel/slider/SliderDetailsSectionExtra'
import SliderDetailsSectionGenres from '../sectionCategories/carrousel/slider/SliderDetailsSectionGenres'

export default function SliderLargeInfo({ url, extraData, setPlayVideo, showVideo }){

  return (
    <div className={`absolute lg:top-44 left-0 w-full animate-delayShow`}>
      <div className='relative w-full flex flex-col'>
        {
          !showVideo &&
          <h6 className={`text-gray-tones-10 lg:text-xl absolute top-5 z-300
            sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-4 py-3 lg:leading-3 
            leading-none`}
          >
            {extraData.title}
          </h6>
        }
        <div className='w-full h-16 bg-gradient-to-t from-gray-tones-500'>
        </div>
        <div className='w-full h-full bg-gray-tones-500 rounded-b-xl items-center px-12 pt-4 pb-12'>
          <SliderDetailsSectionBtn 
            large={true} 
            setPlayVideo={setPlayVideo}
            showVideo={showVideo}
            />
          <SliderDetailsSectionExtra 
            type={extraData.media_type} 
            date={extraData.release_date} 
            rate={extraData.popularity} 
            large={true}
          />
          <SliderDetailsSectionGenres genres={extraData.genre_ids} large={true} />
            <img 
              src={`https://image.tmdb.org/t/p/w500${extraData.poster_path}`}
              alt='poster'
              className='float-right w-52 h-auto rounded-xl -mt-16 ml-2'
            />
          <p className='lg:mt-10 lg:text-tiny lg:font-medium text-gray-tones-10 text-justify'>{extraData.overview}</p>
        </div>
      </div>
    </div>
  )
}