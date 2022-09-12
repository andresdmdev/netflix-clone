import useCategoriesMovie from "../../../hooks/useCategoriesMovie"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function ComedyMovies(){

  const { filmsData } = useCategoriesMovie({ page: 1, genreId: 35 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section="Comedy Movies" />
  )
}