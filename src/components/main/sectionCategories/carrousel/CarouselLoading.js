
export default function CarouselLoading(){

  const slides = [1,2,3,4,5,6,7].map(elem => (
    <div key={elem} className="flex flex-shrink-0 relative w-40 h-64 lg:w-auto lg:h-auto sm:w-auto rounded">
      <div 
        className={`opacity-80 animate-pulse bg-gray-tones-200 lg:w-imgSliderWidth 
        lg:h-imgSliderHeight w-40 h-64 
        sm:w-imgSliderWidthMedium sm:h-imgSliderHeightMedium rounded`}
      ></div>
    </div>
  ))

  return (
    <>
      <div className="animate-pulse bg-gray-tones-300 lg:w-80 lg:h-5 sm:h-4 sm:w-56 h-56 w-40 rounded opacity-80"></div>
      <div className="container mx-auto lg:mt-3 sm:mt-2 mt-1">
        <div className="flex items-center justify-center w-full h-full">
          <div 
            className="w-full relative flex items-center justify-center" 
          >
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <div id="slider" className="h-full flex lg:gap-1.4 md:gap-1.2 gap-1 items-center justify-start transition ease-in-out duration-1100">
                {slides}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}