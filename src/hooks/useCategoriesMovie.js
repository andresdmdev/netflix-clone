import { useEffect, useState } from "react"
import getCategoriesMovie from "../services/getCategoriesMovie"

export default function useCategoriesMovie({ page = 1, genreId }){
  
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {

    getCategoriesMovie({ page, genreId })
      .then(res => {
        setFilmsData(prevState => prevState.concat(res))
      })

  }, [page, genreId])

  return { filmsData }
}