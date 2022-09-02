import { useState } from 'react'
import search from '../../images/search.svg'
import SearchBotton from './searchBar/SearchButton'
import SearchingBar from './searchBar/SearchingBar'

export default function SearchBar(){

  const [showSearchBar, setShowSearchBar] = useState(false)

  function handleClick(){
    setShowSearchBar(prevState => !prevState)
  }

  return (
    <>
      {
        showSearchBar 
        ? <SearchingBar handleClick={handleClick} search={search} /> 
        : <SearchBotton handleClick={handleClick} search={search} />
      }
    </>
  )
}