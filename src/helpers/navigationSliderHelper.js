
export default function navigationSliderHelper({ location, dataId, navigate }){

  const helper = location.pathname.split('/')
  const value = helper[helper.length - 1]

  if(location.pathname.startsWith('/movies')){
    
    sessionStorage.setItem('mediaType', 'movies')
    sessionStorage.setItem('genre', value)

    return navigate(`/movies/film/${dataId}`)

  } else if (location.pathname.startsWith('/tv')) {

    sessionStorage.setItem('mediaType', 'tv')
    sessionStorage.setItem('genre', value)

    return  navigate(`/tv/film/${dataId}`)

  } else {
    sessionStorage.setItem('mediaType', '/')
    sessionStorage.setItem('genre', '/')

    return  navigate(`/${dataId}`)
  }
}