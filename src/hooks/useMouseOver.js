import { useState } from 'react'

export default function useMouseOver(){

  const [mouseOver, setMouseOver] = useState(false)

  function handleMouseEnter(){
    setMouseOver(true)
  }

  function handleMouseLeave(){
    setMouseOver(false)
  }

  return {
    mouseOver: mouseOver,
    handleMouseEnter: () => handleMouseEnter(),
    handleMouseLeave: () => handleMouseLeave()
  }
}