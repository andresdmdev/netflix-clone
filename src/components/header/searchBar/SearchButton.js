
export default function SearchBotton({ search, handleClick }){
  return (
    <button className="transition-all duration-500 ease-in-out" onClick={handleClick}>
      <img 
        src={search}
        alt='search'
        className="text-gray-tones-10 w-4 sm:w-6" />
    </button>
  )
}