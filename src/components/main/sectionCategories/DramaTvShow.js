import useCategoriesTvShows from "../../../hooks/useCategoriesTvShows"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function DramaTvShows(){

  const { filmsData } = useCategoriesTvShows({ page: 1, genreId: 18 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section="Drama TV Shows" />
  )
}