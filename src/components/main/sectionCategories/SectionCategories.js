import PopularMovies from "./PopularMovies";
import PopularTvShows from "./PopularTvShows";
import Trending from "./Trending";

export default function SectionCategories(){
  return (
    <div className={`absolute z-50 top-1/5 sm:top-7/20 lg:top-11/12 w-full flex flex-col
    lg:pl-14 sm:pl-8 pl-4 pb-10`}>
      <Trending />
      <PopularMovies />
      <PopularTvShows />
    </div>
  )
}