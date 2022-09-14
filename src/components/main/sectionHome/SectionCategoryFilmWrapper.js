import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SliderContext from '../../../context/SliderContext'
import useMouseOver from '../../../hooks/useMouseOver'
import Scroll from 'react-scroll'
import smallLogo from '../../../images/small-logo.svg'
import SliderDetailsSection from '../sectionCategories/carrousel/slider/SliderDetailsSection'
import SectionCategoryFilmImg from './SectionCategoryFilmImg'

export const SectionCategoryFilmWrapper = React.memo(({ film }) => {

  const { mouseOver, handleMouseEnter, handleMouseLeave } = useMouseOver()

  const { setExtraData } = useContext(SliderContext)

  const scroll = Scroll.animateScroll
  
  const navigate = useNavigate()

  function handleClick(){
    setExtraData(film)
    navigate(`/${film.id}`)
    scroll.scrollToTop()
  } 

  return (
    <div key={film.id} className='relative flex'>
    <div 
      className={`transition ease-in-out delay-200 duration-300
        lg:hover:z-400 sm:hover:scale-125
        lg:hover:scale-125
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <div 
          className={`flex flex-col relative w-full sm:w-full ${mouseOver && 'drop-shadow-md'}`}
          >
            <SectionCategoryFilmImg 
              title={film.title} 
              backdrop_path={film.backdrop_path} 
              mouseOver={mouseOver} 
              handleClick={handleClick} 
            />
            {
              film.title.length < 20 &&
              <img src={smallLogo} alt='netflixLogo' className='w-4.5 sm:w-4 lg:w-6 absolute top-1.5 left-1 sm:top-1.5 sm:left-1 lg:top-2 lg:left-1' />
            }
            {
              mouseOver &&
              <SliderDetailsSection data={film} />
            }
        </div>
    </div>
  </div>
  )
})

export default SectionCategoryFilmWrapper