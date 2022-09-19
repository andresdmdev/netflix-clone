
import SectionCategoryFilmWrapper from './SectionCategoryFilmWrapper';

export default function SectionCategoryFilmGrid({ data }){

  const dataGrid = data.map(film => (
   <SectionCategoryFilmWrapper key={film.id} film={film} />
  )) 

  return (
    <div className="absolute top:24 left-4 sm:top-52 sm:left-14 sm:mr-14 mr-4">
      <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-gray-tones-0">
        {dataGrid}
      </div>
    </div>
  )
}