
export default function navigationFilmHelper({ navigate, filmId, location }){
  
  const helper = location.pathname.split('/')
  const value = helper[helper.length - 1]

  if(location.pathname.startsWith('/movies/genre')){
    
    sessionStorage.setItem('mediaType', 'movies/genre')
    sessionStorage.setItem('genre', value)

    return navigate(`/movies/genre/${value}/film/${filmId}`)

  } else if(location.pathname.startsWith('/tv/genre')) {

    sessionStorage.setItem('mediaType', 'tv/genre')
    sessionStorage.setItem('genre', value)

    return navigate(`/tv/genre/${value}/film/${filmId}`)

  } else if(location.pathname.startsWith('/search')){

    sessionStorage.setItem('mediaType', 'search')
    sessionStorage.setItem('genre', '')

    return navigate(`/search/${value}/film/${filmId}`)

  } else {

    sessionStorage.setItem('mediaType', 'list')
    sessionStorage.setItem('genre', '')

    return navigate(`/list/film/${filmId}`)

  }
}