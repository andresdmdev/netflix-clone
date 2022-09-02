import usePopularMovies from "../../../hooks/usePopularMovies"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function PopularMovies(){

  const { filmsData } = usePopularMovies({ page: 1 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section='Popular Movies' />
  )
}