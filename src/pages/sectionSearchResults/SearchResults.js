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
      <SectionCategoryFilmGrid data={data} />
      <Outlet />
    </>
  )
}