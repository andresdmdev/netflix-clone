import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_FETCH from "../config/apiFecth";

const initialState = {
  movieCategories: [],
  tvShowCategories: [],
  filmGenreName: '',
  status: 'idle',
  errro: null
}

export const getMovieCategories = createAsyncThunk("category/getMovieCategories", async() => {
  try {
    const response = await API_FETCH.get(`/genre/movie/list?api_key=${process.env.REACT_APP_KEY_API}&language=en-US`)
    const data = await response.data.genres
    return data

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
})

export const getTvShowsCategories = createAsyncThunk("category/getTvShowsCategories", async() => {
  try {
    const response = await API_FETCH.get(`/genre/tv/list?api_key=${process.env.REACT_APP_KEY_API}&language=en-US`)
    const data = await response.data.genres
    return data

  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getNameMoviesGenreById: (state, action) => {

      const id = Number(action.payload)

      const searchGenre = state.movieCategories.find(genre => genre.id === id)

      state.filmGenreName = searchGenre.name === undefined ? '' : searchGenre.name
    },
    getNameTvShowsGenreById: (state, action) => {

      const id = Number(action.payload)

      const searchGenre = state.tvShowCategories.find(genre => genre.id === id)

      state.filmGenreName = searchGenre.name === undefined ? '' : searchGenre.name
    },
  },
  extraReducers(builder){
    builder
      .addCase(getMovieCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getMovieCategories.fulfilled, (state, action) => {
        state.status = 'success'

        if(!Array.isArray(action.payload)){
          state.error = 'Network connection failed'
        } else {
          state.error = null
          state.movieCategories = action.payload
        }

      })
      .addCase(getMovieCategories.rejected, (state, action) => {
        state.status = 'rejected'
      })
      .addCase(getTvShowsCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getTvShowsCategories.fulfilled, (state, action) => {
        state.status = 'success'

        if(!Array.isArray(action.payload)){
          state.error = 'Network connection failed'
        } else {
          state.error = null
          state.tvShowCategories = action.payload
        }

      })
      .addCase(getTvShowsCategories.rejected, (state, action) => {
        state.status = 'rejected'
      })
  }
})

export const {
  getNameMoviesGenreById,
  getNameTvShowsGenreById
} = categorySlice.actions

export const filmGenreName = (state) => state.category.filmGenreName

export const moviesCategories = (state) => state.category.movieCategories

export const tvShowCategories = (state) => state.category.tvShowCategories

export default categorySlice.reducer

