import { genresData } from "./genresData"
import { BsDot } from "react-icons/bs";

export default function SliderDetailsSectionGenres({ genres, large = false }){

  const numberGenres = large ? 4 : 3

  const newGenres = genres.slice(0, numberGenres).map(genre => (
    genresData.find(item => (item.id === genre && item))
  ))

  const newGenresMap = newGenres.map(elem => (
    <div key={elem.id} className='flex flex-row items-center'>
      <BsDot className={`text-gray-tones-100 ${large ? 'text-base sm:text-xl lg:text-2xl' : 'text-xs'}`} />
      <p className={`m-0 p-0 ${large ? 'text-tiny sm:text-sm lg:text-tiny' : 'text-s'} text-gray-tones-10 font-semibold leading-none`}>{elem.name}</p>
    </div>
  ))

  return (
    <div className={`flex gap-0 ${large ? 'mt-4 sm:mt-4 lg:mt-3 sm:w-80' : 'mt-1.5'}`}>
      {newGenresMap}
    </div>
  )
}