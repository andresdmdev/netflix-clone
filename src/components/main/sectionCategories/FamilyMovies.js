import useCategoriesMovie from "../../../hooks/useCategoriesMovie"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function FamilyMovies(){

  const { filmsData } = useCategoriesMovie({ page: 1, genreId: 10751 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section="Family Movies" />
  )
}