
export default function HomeImage({ imageHome }){
  return (
    <div className='absolute'>
      <div className='relative'>
        <img 
          fetchpriority="high"
          src={imageHome} 
          alt='home'
          className=" bg-opacity-10"
        />
        <div className='bg-gradient-to-t from-gray-tones-500 z-50 w-full sm:h-28 h-16 absolute bottom-0'>
        </div>
      </div>
    </div>
  )
}