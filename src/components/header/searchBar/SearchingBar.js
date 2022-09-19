import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSearchResults, setKeywordValue } from '../../../services/slices/searchKeywordReducerSlices'

export default function SearchingBar({ handleClick, search }){

  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleChange(e){
    setKeyword(e.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    if(keyword){
      dispatch(getSearchResults({ keyword: keyword, page: 1 }))
      dispatch(setKeywordValue(keyword))
      navigate(`${`/search/${keyword}`}`)
    }
  }

  return (
    <div className="items-center flex bg-gray-tones-500 py-2 px-2 rounded transition-all duration-600 ease-in-out">
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <button className="w-5 sm:w-6" onClick={handleSubmit}>
          <img 
            src={search} 
            alt='search'
            className="text-gray-tones-10 w-full"
            onClick={handleClick}
          />
        </button>
        <input 
          onChange={handleChange}
          value={keyword}
          className={`bg-gray-tones-500 indent-2 text-gray-tones-0 text-sm outline-none w-32 sm:w-72`}
          placeholder='Search...' />
      </form>
    </div>
  )
}