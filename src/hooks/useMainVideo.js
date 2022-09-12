import { useState, useEffect } from 'react'

export default function useMainVideo(){

  const [showVideo, setShowVideo] = useState(false)
  const [playVideo, setPlayVideo] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true)
    }, 8000);

    setTimeout(() => {
      setShowVideo(false)
    }, 24000);

    return () => {
      clearTimeout()
    } 
  }, [])

  useEffect(() => {
    
    if(playVideo){
      setShowVideo(true)
    }

    setTimeout(() => {
      if(playVideo){
        setShowVideo(false)
        setPlayVideo(false)
      }
    }, 14000);

    return () => {
      clearTimeout()
    } 
  }, [playVideo])

  return {
    showVideo,
    setPlayVideo
  }
}