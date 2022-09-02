
export default function HomeVideo({ videoUrl }){
  return (
    <div className='absolute'>
      <div className='relative'>
        <video 
          src={videoUrl} 
          autoPlay 
          muted >
        </video>
        <div className='bg-gradient-to-t from-gray-tones-500 z-50 w-full sm:h-28 h-16 absolute bottom-0'>
        </div>
      </div>
    </div> 
  )
}