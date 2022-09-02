import { useEffect, useState } from "react"
import getPopularMovies from "../services/getPopularMovies"

export default function usePopularMovies({ page = 1 }){
  
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {

    getPopularMovies({ page })
      .then(res => {
        setFilmsData(prevState => prevState.concat(res))
      })

  }, [page])

  return { filmsData }
}