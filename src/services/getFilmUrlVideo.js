import API_FETCH from "./config/apiFecth";

export const getFilmUrlVideo = async ({ type, id }) => {

  try {
    const response = await API_FETCH.get(`/${type}/${id}/videos?api_key=${process.env.REACT_APP_KEY_API}&language=en-US`)
    const data = await response.data.results

    return data.find(elem => elem.name === 'Official Trailer')

  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export default getFilmUrlVideo