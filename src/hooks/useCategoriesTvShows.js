import { useEffect, useState } from "react"
import getCategoriesTvShows from '../services/getCategoriesTvShows'

export default function useCategoriesTvShows({ page = 1, genreId }){
  
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {

    getCategoriesTvShows({ page, genreId })
      .then(res => {
        setFilmsData(prevState => prevState.concat(res))
      })

  }, [page, genreId])

  return { filmsData }
}