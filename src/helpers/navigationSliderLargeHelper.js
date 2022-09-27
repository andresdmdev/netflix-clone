
export default function navigationSliderLargeHelper({ navigate, keywordValue }){

  const storageMediaType = sessionStorage.getItem('mediaType')
  const storageGenreValue = sessionStorage.getItem('genre')

  if(storageMediaType === 'movies/genre'){

    return navigate(`/movies/genre/${storageGenreValue}`)

  } else if(storageMediaType === 'tv/genre') {

    return  navigate(`/tv/genre/${storageGenreValue}`)

  } else if(storageMediaType === 'movies'){

    return  navigate(`/movies`)

  } else if(storageMediaType === 'tv'){

    return  navigate(`/tv`)

  } else if(storageMediaType === 'search') {

    return  navigate(`/search/${keywordValue}`)

  } else if(storageMediaType === 'list') {

    return  navigate(`/list`)

  } else {

    return  navigate('/')

  }
}