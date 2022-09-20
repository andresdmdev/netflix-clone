
export default function SectionCategoryTitle({ genre, mediaType }){
  return (
    <div className="flex gap-3 mb-4 sm:mb-6 mt-1 ml-4 sm:gap-6 sm:mt-2 sm:ml-14 items-center text-gray-tones-10">
      <h3 className="text-gray-tones-100 text-base font-normal sm:text-xl sm:font-bold">{mediaType}</h3>
      <h1 className="text-gray-tones-10 text-xl font-bold sm:text-4xl sm:font-extrabold">{genre}</h1>
    </div>
  )
}