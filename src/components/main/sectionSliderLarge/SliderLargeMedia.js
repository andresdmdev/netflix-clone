import ReactPlayer from 'react-player'
import useTrailerVideo from '../../../hooks/useTrailerVideo'
import smallLogo from '../../../images/small-logo.svg'

export default function SliderLargeMedia({ backdropImg, url }){

  const { showTrailer } = useTrailerVideo()

  const screenSize = window.innerWidth > 600 ? '-35px' : '-22px'

  return (
    <div className='mt-12 sm:mt-20 animate-largeSlider bg-red-tones-500 rounded-t relative'>
      { 
        (url.key && showTrailer) ?
        <div className='w-30 h-18 sm:w-56 sm:h-32 lg:w-56 lg:h-32 rounded-t object-contain overflow-hidden flex justify-center items-center'>
          <ReactPlayer 
            playing url={`https://www.youtube.com/watch?v=${url.key}`} 
            style={{ 
              'margin-top': screenSize,
              'width': '100%',
              'height': '250px'
            }}
          /> 
        </div>
        :
        <img 
          src={`https://image.tmdb.org/t/p/w500${backdropImg}`} 
          alt="backdrop" 
          className={`w-fit h-18 sm:w-56 sm:h-32 lg:w-56 lg:h-32 rounded-t`}
        /> 
      }
      <img 
        src={smallLogo} alt='netflixLogo' 
        className={`w-2.5 sm:w-4 lg:w-4 absolute left-0.75 top-1 lg:top-1.5 lg:left-1`} />
    </div>
  )
}