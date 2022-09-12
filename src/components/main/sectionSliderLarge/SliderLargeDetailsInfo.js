
export default function SliderLargeDetailsInfo({ extraData }){
  return (
    <>
      <h2 className='lg:w-96 text-xl font-semibold sm:text-xl sm:font-semibold lg:text-2xl lg:font-bold leading-normal text-gray-tones-10 mt-6 sm:mt-8 lg:mt-8 mb-2 sm:mb-0 p-0'>{extraData.original_title}</h2>
      <img 
        src={`https://image.tmdb.org/t/p/w500${extraData.poster_path}`}
        alt='poster'
        className='sm:float-right w-52 h-auto rounded-xl sm:-mt-28 lg:-mt-32 sm:ml-2 ml-auto mr-auto sm:mr-0'
      />
      <p className='mt-3 sm:mt-3 lg:mt-4 text-tiny sm:text-sm sm:font-normal lg:text-tiny lg:font-medium text-gray-tones-10 text-justify lg:w-full'>{extraData.overview}</p>
    </>
  )
}