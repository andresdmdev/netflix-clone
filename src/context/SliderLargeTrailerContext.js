import React, { useState } from 'react'

const Context = React.createContext({})

export function SliderLargeTrailerContext({ children }){

  const [showTrailerVideo, setShowTrailerVideo] = useState({ show: false, play: false })

  const showTrailer = showTrailerVideo.show

  const playTrailer = showTrailerVideo.play

  return (
    <Context.Provider value={{ showTrailer, playTrailer, setShowTrailerVideo }}>
      {children}
    </Context.Provider>
  )
}

export default Context