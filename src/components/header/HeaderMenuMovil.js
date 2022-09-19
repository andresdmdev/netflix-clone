import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MENU_LINKS = ['movies', 'series', 'list'] 

export default function HeaderMenuMovil(){

  const genreListData = MENU_LINKS.map(link => (
    <div key={link}>
      <Menu.Item>
        {({ active }) => (
          <Link
            to={`/${link === 'series' ? 'tv' : link}`}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-2 py-2.5 text-tiny lg:text-sm hover:underline capitalize'
            )}
          >
            {link}
          </Link>
        )}
      </Menu.Item>
    </div>
  ))

  return (
    <div className='sm:hidden absolute z-300 top-4 left-24 flex gap-2 items-center'>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded bg-gray-tones-450 bg-opacity-40 py-0.75 px-2 text-xs font-semibold text-gray-tones-10 shadow-sm focus:outline-none">
            Sections
            <IoIosArrowDown className="mt-0.25 -mr-0.5 ml-2 h-4 w-4" aria-hidden="true" />
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
          <Menu.Items className="absolute left-0 z-500 mt-0.25 w-52 origin-top-right rounded bg-gray-tones-450 ring-1 ring-gray-tones-300 shadow-lg focus:outline-none">
            <div className="py-0.75 px-1.5 grid grid-cols-3 text-gray-tones-10 font-medium">
              {genreListData}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}