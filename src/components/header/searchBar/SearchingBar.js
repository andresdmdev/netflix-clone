
export default function SearchingBar({ handleClick, search }){
  return (
    <div className="items-center flex bg-gray-tones-500 py-2 px-2 rounded transition-all duration-600 ease-in-out">
      <img 
        src={search} 
        alt='search'
        className="text-gray-tones-10 w-4 sm:w-6"
        onClick={handleClick} />
      <input 
        className={`bg-gray-tones-500 indent-2 text-gray-tones-0 text-sm outline-none w-32 sm:w-56`}
        placeholder='Title of the movie or serie' />
    </div>
  )
}