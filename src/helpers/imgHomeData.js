import coupleBeach from '../images/couple-beach.avif'
import ticket from '../images/ticket.avif'
import city from '../images/city.avif'
import watchingMoviesGirls from '../images/watching_movies_girls.avif'

const imgHomeData = [
  {
    id: 1,
    title: 'Pareja',
    image: coupleBeach,
    overview: 'Una increible historia...',
    mediaType: 'tv'
  },
  {
    id: 2,
    title: 'Film',
    image: ticket,
    overview: 'Una increible historia de una pareja que haria todo por amor...',
    mediaType: 'movie'
  },
  {
    id: 3,
    title: 'Girls',
    image: watchingMoviesGirls,
    overview: 'Una increible historia...',
    mediaType: 'tv'
  },
  {
    id: 4,
    title: 'City',
    image: city,
    overview: 'Una increible historia...',
    mediaType: 'movie'
  }
]

export function randomImgHomeData(){

  const numberRandom = Math.floor(Math.random() * imgHomeData.length)

  return imgHomeData[numberRandom]
}