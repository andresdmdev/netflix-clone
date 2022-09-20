
export default function SectionCategoryFilmImg({ title, imgUrl, mouseOver, handleClick }){

  const smallScreen = window.innerWidth < 600 ? true : false

  const validateImg = imgUrl === null ? <div className=" bg-red-tones-800 w-imgGridBackdropWidthSmall h-imgGridBackdropHeightSmall"></div> : `https://image.tmdb.org/t/p/w500${imgUrl}`

  return (
    <div onClick={handleClick} className='bg-gray-tones-400'>
      <img 
        src={validateImg} 
        alt={title} 
        className={`hover:z-400 bg-gray-tones-300 ${mouseOver ? 'rounded-t' : 'rounded'} opacity-85`}
      />
      <h6 className={`${smallScreen ? 'hidden' : 'flex'} absolute bottom-1 sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
        sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
        leading-none`}
      >
        {title}
      </h6>
    </div>
  )
}