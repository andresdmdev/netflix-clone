import { useState, useEffect } from 'react'

export default function useTrailerVideo(){

  const [showVideo, setShowVideo] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    
    if(playVideo){
      setShowVideo(true)

      setTimeout(() => {
        setShowVideo(false)
        setPlayVideo(false)
      }, 180000);

    } else {
      setShowVideo(false)
    }

    return () => {
      clearTimeout()
    } 
  }, [playVideo])

  return {
    showVideo,
    setPlayVideo
  }
}