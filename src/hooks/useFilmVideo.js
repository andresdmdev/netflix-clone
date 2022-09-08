import { useState, useEffect } from 'react'
import getFilmUrlVideo from '../services/getFilmUrlVideo'

export default function useFilmVideo({ type, id, active }){

  const [url, setUrl] = useState({})

  useEffect(() => {
    if(active){
      getFilmUrlVideo({ type, id })
      .then(res => {
        setUrl({ id: res.id, key: `https://www.youtube.com/watch?v=${res.key}`, name: res.name })
      })
    }
  }, [active, id, type])

  return { url }
}