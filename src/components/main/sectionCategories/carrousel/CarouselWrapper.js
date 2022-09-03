import Carousel from "./Carousel";
import CarouselLoading from "./CarouselLoading";

export default function CarouselWrapper({ filmsData, section }){
  return (
    <div className="py-3 lg:pt-0 lg:pb-8 bg-opacity-0 w-full">
      {
        filmsData.length > 1 ?
        <>
          <h3 className={`${filmsData.length < 1 && 'animate-pulse bg-gray-tones-10 w-80 h-6'}
          my-0 text-gray-tones-10 font-semibold text-xs sm:text-base lg:text-1.5xl`}>{section}</h3>
          <div className="container mx-auto lg:mt-3 sm:mt-2 mt-1">
            <div className="flex items-center justify-center w-full h-full">
              <Carousel dataFilms={filmsData} />
            </div>
          </div>
        </> :
        <CarouselLoading />
      }
    </div>
  )
}