import useTrendingData from "../../../hooks/useTrendingData"
import CarouselWrapper from "./carrousel/CarouselWrapper"
 
export default function Trending(){

  const { filmsData } = useTrendingData({ page: 1 })
 
  return (
    <CarouselWrapper filmsData={filmsData} section='Trending' />
  )
}