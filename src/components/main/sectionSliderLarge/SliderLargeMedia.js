import ReactPlayer from 'react-player'
import smallLogo from '../../../images/small-logo.svg'

export default function SliderLargeMedia({ backdropImg, url, showVideo }){

  return (
    <div className='top-20 absolute animate-largeSlider bg-gray-tones-500 rounded-t'>
      {
        (url.key && showVideo) ?
        <div className='w-56 h-32 rounded-t object-contain overflow-hidden flex justify-center items-center'>
          <ReactPlayer 
            playing url={`https://www.youtube.com/watch?v=${url.key}`} 
            style={{ 
              'margin-top': '-35px',
              'width': '350px',
              'height': '250px'
            }}
          /> 
        </div>
        :
        <img 
          src={`https://image.tmdb.org/t/p/w500${backdropImg}`} 
          alt="backdrop" 
          className={`w-56 h-32 rounded-t`}
        /> 
      }
      <img 
        src={smallLogo} alt='netflixLogo' 
        className={`w-4.5 sm:w-4 lg:w-4 absolute top-1.5 left-1`} />
    </div>
  )
}