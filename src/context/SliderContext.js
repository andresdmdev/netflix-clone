import React, { useState } from 'react'

const Context = React.createContext({})

export function SliderContext({ children }){
  const [extraData, setExtraData] = useState({})

  return (
    <Context.Provider value={{ extraData, setExtraData }}>
      {children}
    </Context.Provider>
  )
}

export default Context