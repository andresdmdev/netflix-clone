
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
    <div ref={fromRef}>
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