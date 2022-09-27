import ReactPlayer from 'react-player'
import useTrailerVideo from '../../../hooks/useTrailerVideo'
import smallLogo from '../../../images/small-logo.svg'

export default function SliderLargeMedia({ backdropImg, url }){

  const { showTrailer } = useTrailerVideo()

  const screenSize = window.innerWidth > 600 ? '-35px' : '-5px'

  return (
    <div className='mt-0 sm:mt-20 animate-largeSlider bg-red-tones-500 rounded-t w-1/3 flex items-center'>
      { 
        (url.key && showTrailer) ?
        <div className='w-full h-14 sm:w-56 sm:h-32 lg:w-56 z-300 lg:h-32 rounded-t overflow-hidden flex justify-center items-center'>
          <ReactPlayer 
            playing url={`https://www.youtube.com/watch?v=${url.key}`} 
            style={{ 
              'marginTop': screenSize,
              'width': '100%',
            }}
          /> 
        </div>
        :
        <img 
          src={`https://image.tmdb.org/t/p/w500${backdropImg}`} 
          alt="backdrop" 
          className={`w-full h-14 sm:w-56 sm:h-32 lg:w-56 lg:h-32 rounded-t`}
        /> 
      }
      <img 
        src={smallLogo} alt='netflixLogo' 
        className={`w-2.5 sm:w-4 lg:w-4 z-400 absolute left-0.75 top-1 lg:top-1.5 lg:left-1`} />
    </div>
  )
}