import { useSelector } from "react-redux"
import { keyword } from "../../services/slices/searchKeywordReducerSlices"

export function KeywordSearchValue(){

  const keywordValue = useSelector(keyword)

  return (
    <div className="flex flex-row gap-4 items-center ml-14 mt-5 mb-10">
      <h3 className=" text-xl text-gray-tones-100 font-semibold">Keyword</h3>
      <h1 className="m-0 p-0 text-4xl text-gray-tones-0 font-extrabold capitalize">"{keywordValue}"</h1>
    </div>
  )
}