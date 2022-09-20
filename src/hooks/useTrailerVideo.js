import { useEffect, useContext } from 'react'
import SliderLargeTrailerContext from '../context/SliderLargeTrailerContext';

export default function useTrailerVideo(){

  const { showTrailer, playTrailer, setShowTrailerVideo } = useContext(SliderLargeTrailerContext)

  useEffect(() => {
    
    if(playTrailer){
      setShowTrailerVideo(prevState => ({ ...prevState, show: true }))

      setTimeout(() => {
        setShowTrailerVideo({ show: false, play: false })
      }, 180000);

    } else {
      setShowTrailerVideo(prevState => ({ ...prevState, show: false }))
    }

    return () => {
      clearTimeout()
    } 
  }, [playTrailer, setShowTrailerVideo])

  return {
    showTrailer,
    playTrailer: () => setShowTrailerVideo(prevState => ({ ...prevState, play: true })),
    stopTrailer: () => setShowTrailerVideo(prevState => ({ ...prevState, play: false }))
  }
}