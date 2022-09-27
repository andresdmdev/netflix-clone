import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'
import { getNameTvShowsGenreById, getTvShowsCategories, tvShowCategories } from '../../../services/slices/categoryReducerSlices';
import { useDispatch, useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SectionCategoriesTvShowsDetails({ mediaTypeName }){

  const genreList = useSelector(tvShowCategories)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getTvShowsCategories())

  }, [dispatch])

  function handleClick(id){
    dispatch(getNameTvShowsGenreById(id))
  }

  const genreListData = genreList.map(genre => (
    <div key={genre.id}>
      <Menu.Item>
        {({ active }) => (
          <Link
            to={`/tv/genre/${genre.id}`}
            onClick={() => handleClick(genre.id)}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-2 py-1 text-xs lg:text-sm hover:underline'
            )}
          >
            {genre.name}
          </Link>
        )}
      </Menu.Item>
    </div>
  ))

  return (
    <div className='absolute z-300 top-52 mt-3 sm:mt-0 sm:top-16 lg:top-20 left-4 sm:left-10 lg:left-14 flex items-center'>
      <h1 className='text-base sm:text-xl lg:text-4xl text-gray-tones-0 font-extrabold mr-3 sm:mr-5 lg:mr-10'>
        TV Shows
      </h1>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded border border-gray-300 bg-gray-tones-450 hover:bg-opacity-20 py-0.25 px-1 sm:px-2 sm:py-1 text-xs sm:text-sm font-semibold text-gray-tones-10 shadow-sm focus:outline-none">
            Genres
            <IoIosArrowDown className="mt-0.25 sm:mt-1 -mr-0.5 ml-2 h-4 w-4" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-300 mt-0.25 w-64 sm:w-100 origin-top-right rounded bg-gray-tones-450 ring-1 ring-gray-tones-300 shadow-lg focus:outline-none">
            <div className="sm:py-1 sm:px-2 py-0.75 px-1.5 grid grid-cols-2 sm:grid-cols-3 text-gray-tones-10 font-medium">
              {genreListData}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}