
export default function SectionCategoryFilmImg({ title, backdrop_path, mouseOver, handleClick }){
  return (
    <div onClick={handleClick}>
      <img 
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
        alt={title} 
        className={`hover:z-400 w-64 h-36 bg-gray-tones-300 ${mouseOver ? 'rounded-t' : 'rounded'} opacity-85`}
      />
      <h6 className={`absolute bottom-1 sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
        sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
        leading-none`}
      >
        {title}
      </h6>
    </div>
  )
}