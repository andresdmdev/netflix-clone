import usePopularTvShows from "../../../hooks/usePopularTvShows"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function PopularTvShows(){

  const { filmsData } = usePopularTvShows({ page: 1 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section='Popular TV Shows' />
  )
}