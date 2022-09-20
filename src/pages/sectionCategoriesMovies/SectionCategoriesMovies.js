import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import ComedyMovies from "../../components/main/sectionCategories/ComedyMovies";
import FamilyMovies from "../../components/main/sectionCategories/FamilyMovies";
import PopularMovies from "../../components/main/sectionCategories/PopularMovies";
import Home from "../../components/main/sectionHome/Home";
import SectionCategoriesFilmDetails from "../../components/main/sectionHome/SectionCategoriesFilmDetails";

export default function SectionCategoriesMovies(){
  return (
    <>
      <Header />
      <Home />
      <SectionCategoriesFilmDetails mediaTypeName='movie' />
      <div className={`absolute z-50 top-2/6 sm:top-7/20 lg:top-11/12 w-full flex flex-col
        lg:pl-14 sm:pl-8 pl-4 pb-32`}>
        <PopularMovies />
        <ComedyMovies />
        <FamilyMovies />
      </div>
      <Outlet />
    </>
  )
}