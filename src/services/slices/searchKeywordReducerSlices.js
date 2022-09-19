import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_FETCH from "../config/apiFecth";

const initialState = {
  results: [],
  keyword: '',
  status: 'idle',
  errro: null
}

export const getSearchResults = createAsyncThunk("search/getSearchResults", async({ keyword, page = 1 }) => {
  try {
    const response = await API_FETCH.get(`/search/multi?api_key=${process.env.REACT_APP_KEY_API}&language=en-US&query=${keyword}&page=${page}`)
    const data = await response.data.results
    return data

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
})

const searchResults = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setKeywordValue: (state, action) => {
      state.keyword = action.payload
    }
  },
  extraReducers(builder){
    builder
      .addCase(getSearchResults.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.status = 'success'

        if(!Array.isArray(action.payload)){
          state.error = 'Network connection failed'
        } else {
          state.error = null

          const filterMediaType = action.payload.filter(elem => elem.media_type !== 'person').filter(elem => elem.backdrop_path !== null)

          state.results = filterMediaType.map(film => ({
                            id: film.id,
                            backdrop_path: film.backdrop_path,
                            title: film.title || film.name,
                            original_language: film.original_language,
                            original_title: film.original_title || film.original_name,
                            overview: film.overview,
                            poster_path: film.poster_path,
                            media_type: film.media_type,
                            release_date: film.release_date || film.first_air_date,
                            genre_ids: film.genre_ids,
                            popularity: film.popularity
                          }))
        }
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.status = 'rejected'
      })
  }
})

export const { setKeywordValue } = searchResults.actions

export const keyword = (state) => state.search.keyword

export const searchResultsData = (state) => state.search.results

export default searchResults.reducer

