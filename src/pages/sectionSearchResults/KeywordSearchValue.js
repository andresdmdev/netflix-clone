import { useSelector } from "react-redux"
import { keyword } from "../../services/slices/searchKeywordReducerSlices"

export function KeywordSearchValue(){

  const keywordValue = useSelector(keyword)

  return (
    <div className="flex flex-row sm:gap-4 items-center sm:ml-14 sm:mt-5 sm:mb-10 ml-4 mt-1 mb-6">
      <h3 className="text-base sm:text-xl mr-2 text-gray-tones-100 font-normal sm:font-semibold">Keyword</h3>
      <h1 className="m-0 p-0 text-xl sm:text-4xl text-gray-tones-0 font-semibold sm:font-extrabold capitalize">"{keywordValue}"</h1>
    </div>
  )
}