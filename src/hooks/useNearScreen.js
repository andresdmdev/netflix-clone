import { useState, useRef,useEffect } from 'react'

export default function useNearScreen({ once = true } = {}){
  
  const [isNearScreen, setShow] = useState()

  const fromRef = useRef()

  useEffect(() => {

    let observer

    const onChange = (entries, observer) => {
      if(entries[0].isIntersecting){
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    Promise.resolve(IntersectionObserver).then(() => {

      observer = new IntersectionObserver(onChange, { rootMargin: '50px' })

      if(fromRef.current) observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })
  
  return { isNearScreen, fromRef }
}