
export default function SectionCategoryTitle({ genre, mediaType }){
  return (
    <div className="flex gap-6 mt-2 ml-14 items-center text-gray-tones-10">
      <h3 className=" text-gray-tones-100 text-xl font-bold">{mediaType}</h3>
      <h1 className=" text-gray-tones-10 text-4xl font-bold">{genre}</h1>
    </div>
  )
}