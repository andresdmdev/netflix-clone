import { Image } from 'pure-react-carousel';

export default function SliderImgWrapper({ image, active, title, type, id }){

  const skeletonLoader = ({ error }) => (
    <div className='object-cover object-center animate-pulse lg:w-imgSliderWidth lg:h-imgSliderHeight bg-gray-tones-500 rounded'>
      { error ? 'Error loading image' : 'Movie Name'}
    </div>  
  )


  return (
    <>
      <Image 
        src={`https://image.tmdb.org/t/p/w500${image}`} 
        alt="black chair and white table" 
        className={` object-cover object-center w-full ${active ? 'rounded-t' : 'rounded'} opacity-85`}
        renderError={skeletonLoader({ error: true })}
        renderLoading={skeletonLoader({ error: false })}
      />
      <h6 className={`absolute bottom-1 sm:bottom-0 lg:bottom-1 left-0 text-gray-tones-10 lg:text-xs 
        sm:text-s text-xs font-semibold rounded-r-sm rounded-b-sm bg-red-tones-600 px-2 py-1 lg:leading-3 
        leading-none`}
      >
        {title}
      </h6>
    </>
  )
}