import { useEffect, useState } from "react"
import getTrending from '../services/getTrending'

export default function useTrendingData({ page = 1 }){
  
  const [filmsData, setFilmsData] = useState([])

  useEffect(() => {

    getTrending({ page })
      .then(res => {
        setFilmsData(prevState => prevState.concat(res))
      })

  }, [page])

  return { filmsData }
}