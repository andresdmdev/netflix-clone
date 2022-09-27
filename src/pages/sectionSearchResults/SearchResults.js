import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SectionCategoryFilmGrid from "../../components/main/sectionHome/SectionCategoryFilmGrid";
import { searchResultsData } from "../../services/slices/searchKeywordReducerSlices";
import { KeywordSearchValue } from "./KeywordSearchValue";

export default function Searchresults(){

  const data = useSelector(searchResultsData)

  return (
    <>
      <Header />
      <KeywordSearchValue />
      {
        data.length > 0 
        ? <SectionCategoryFilmGrid data={data} />
        : <h3 className="text-xl text-gray-tones-10 font-semibold ml-4 sm:ml-14 my-1">Sorry, I dont found anything 😔</h3>
      }
      <Outlet />
    </>
  )
}