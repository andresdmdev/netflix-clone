import { useEffect, useState } from "react"
import getPopularTvShows from "../services/getPopularTvShows"

export default function usePopularTvShows({ page = 1 }){
  
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {

    getPopularTvShows({ page })
      .then(res => {
        setFilmsData(prevState => prevState.concat(res))
      })

  }, [page])

  return { filmsData }
}