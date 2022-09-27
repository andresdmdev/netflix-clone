import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: JSON.parse(localStorage.getItem('user-list')) || [],
}

const favoriteList = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addFilmToFavorite: (state, action) => {

      if(state.listData){

        state.listData = [ ...state.listData, action.payload ]
      } else{

        state.listData = [ action.payload ]
      }
      
      localStorage.setItem('user-list',JSON.stringify(state.listData))

    },
    deleteFilmFromFavorite: (state, action) => {

      if(state.listData){

        state.listData = state.listData.filter(film => film.id !== action.payload)

      } 
      
      localStorage.setItem('user-list',JSON.stringify(state.listData))

    }
  }
})

export const { addFilmToFavorite, deleteFilmFromFavorite } = favoriteList.actions

export const favoriteListData = (state) => state.list.listData

export default favoriteList.reducer

