import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import DramaTvShows from "../../components/main/sectionCategories/DramaTvShow";
import PopularTvShows from "../../components/main/sectionCategories/PopularTvShows";
import Home from "../../components/main/sectionHome/Home";
import SectionCategoriesTvShowsDetails from "../../components/main/sectionHome/SectionCategoriesTvShowsDetails";

export default function SectionCategoriesTvShows(){
  return (
    <>
      <Header />
      <Home />
      <SectionCategoriesTvShowsDetails mediaTypeName='tv' />
      <div className={`absolute z-50 top-2/6 sm:top-7/20 lg:top-11/12 w-full flex flex-col
        lg:pl-14 sm:pl-8 pl-4 pb-32`}>
        <PopularTvShows />
        <DramaTvShows />
      </div>
      <Outlet />
    </>
  )
}