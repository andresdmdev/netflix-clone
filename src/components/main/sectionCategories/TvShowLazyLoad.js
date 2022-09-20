
import React, { Suspense } from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import CarouselLoading from './carrousel/CarouselLoading'

const PopularTvShows = React.lazy(
  () => import('./PopularTvShows')
)

const DramaTvShows = React.lazy(
  () => import('./DramaTvShow')
)

export default function TvShowLazyLoad(){

  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef} className='flex flex-col gap-2'>
      <Suspense fallback={<CarouselLoading />}>
        {
          isNearScreen ?
          <>
            <PopularTvShows />
            <DramaTvShows />
          </>
          :
          <CarouselLoading />
        }
      </Suspense>
    </div>
  )
}