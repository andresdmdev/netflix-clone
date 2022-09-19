import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SectionCategoryTitle from "../../components/main/sectionCategories/SectionCategoryTitle";
import SectionCategoryFilmGrid from '../../components/main/sectionHome/SectionCategoryFilmGrid';
import useCategoriesMovie from '../../hooks/useCategoriesMovie'
import { getMovieCategories, filmGenreName, getNameMoviesGenreById } from "../../services/slices/categoryReducerSlices";

export default function CategoryMovies(){

  const { id } = useParams()

  const { filmsData } = useCategoriesMovie({ page: 1, genreId: id })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieCategories())  

    setTimeout(() => {
      dispatch(getNameMoviesGenreById(id))
    }, 500); 

  }, [dispatch, id])

  const genreName = useSelector(filmGenreName)

  return (
    <>
     <Header />
     <SectionCategoryTitle genre={genreName} mediaType='Movies' />
     <SectionCategoryFilmGrid data={filmsData} />
     <Outlet />
    </>
  )
}