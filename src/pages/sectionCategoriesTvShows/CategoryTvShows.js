import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SectionCategoryTitle from "../../components/main/sectionCategories/SectionCategoryTitle";
import SectionCategoryFilmGrid from '../../components/main/sectionHome/SectionCategoryFilmGrid';
import useCategoriesTvShows from '../../hooks/useCategoriesTvShows';
import { getTvShowsCategories, filmGenreName, getNameTvShowsGenreById } from "../../services/slices/categoryReducerSlices";

export default function CategoryTvShows(){

  const { id } = useParams()

  const { filmsData } = useCategoriesTvShows({ page: 1, genreId: id })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTvShowsCategories())  

    setTimeout(() => {
      dispatch(getNameTvShowsGenreById(id))
    }, 500); 

  }, [dispatch, id])

  const genreName = useSelector(filmGenreName)

  return (
    <>
     <Header />
     <SectionCategoryTitle genre={genreName} mediaType='TV Shows' />
     <SectionCategoryFilmGrid data={filmsData} />
     <Outlet />
    </>
  )
}