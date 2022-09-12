import React, { Suspense } from 'react'
import useNearScreen from '../../../hooks/useNearScreen'
import CarouselLoading from './carrousel/CarouselLoading'

const ComedyMovies = React.lazy(
  () => import('./ComedyMovies')
)

const FamilyMovies = React.lazy(
  () => import('./FamilyMovies')
)

export default function MovieLazyLoad(){

  const { isNearScreen, fromRef } = useNearScreen()

  return (
    <div ref={fromRef}>
      <Suspense fallback={<CarouselLoading />}>
        {
          isNearScreen ?
          <>
            <ComedyMovies />
            <FamilyMovies />
          </>
          :
          <CarouselLoading />
        }
      </Suspense>
    </div>
  )
}