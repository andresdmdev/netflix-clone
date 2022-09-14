
import SectionCategoryFilmWrapper from './SectionCategoryFilmWrapper';

export default function SectionCategoryFilmGrid({ data }){

  const dataGrid = data.map(film => (
   <SectionCategoryFilmWrapper key={film.id} film={film} />
  )) 

  return (
    <div className="mt-16 ml-14 mr-14">
      <div className="grid gap-4 grid-cols-5 text-gray-tones-0">
        {dataGrid}
      </div>
    </div>
  )
}