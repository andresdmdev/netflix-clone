import { genresData } from "../sectionCategories/carrousel/slider/genresData"
import { BsDot } from "react-icons/bs";

export default function SliderLargeDetailsSectionGenres({ genres }){

  const newGenres = genres.slice(0, 4).map(genre => (
    genresData.find(item => (item.id === genre && item))
  ))

  const newGenresMap = newGenres.map(elem => (
    <div key={elem.id} className='flex flex-row items-center'>
      <BsDot className={`text-gray-tones-100text-base sm:text-xl lg:text-2xl`} />
      <p className={`m-0 p-0 text-tiny sm:text-sm lg:text-tiny text-gray-tones-10 font-semibold leading-none`}>{elem.name}</p>
    </div>
  ))

  return (
    <div className={`flex gap-0 mt-4 sm:mt-4 lg:mt-3 sm:w-80`}>
      {newGenresMap}
    </div>
  )
}