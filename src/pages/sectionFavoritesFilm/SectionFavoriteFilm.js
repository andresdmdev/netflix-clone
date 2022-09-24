
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SectionCategoryFilmGrid from '../../components/main/sectionHome/SectionCategoryFilmGrid';
import { favoriteListData } from "../../services/slices/favoriteListReducerSlices";

export default function SectionFavoriteFilm(){

  const favoriteFilmsData = useSelector(favoriteListData)

  return (
    <>
      <Header />
      <div className="flex gap-3 mb-4 sm:mb-6 mt-1 ml-4 sm:gap-6 sm:mt-2 sm:ml-14 items-center text-gray-tones-10">
        <h1 className="text-gray-tones-10 text-xl font-bold sm:text-4xl sm:font-extrabold">Favorites</h1>
      </div>
      {
        favoriteFilmsData.length === 0
        ? <h3 className="text-gray-tones-10 text-sm font-medium sm:ml-14 ml-4 sm:text-xl sm:font-medium">No favorite film added...</h3>
        : <SectionCategoryFilmGrid data={favoriteFilmsData} />
      }
      <Outlet />
    </>
  )
}