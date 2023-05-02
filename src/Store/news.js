import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNews,createNews,deleteNews } from '../Network/ServiceClass/News';

export const getNewsThunk = createAsyncThunk('slider/getNews', getNews);
export const createNewsThunk = createAsyncThunk('slider/createNews', createNews);
export const deleteNewsThunk = createAsyncThunk('slider/deleteNews', deleteNews);



const initialState = {
  news: [],
  loading: false,
  createNewsLoading: false,
  deleteNewsLoading: false

}

const SliderSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: {
    [getNewsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getNewsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.news = action.payload.data
    },
    [getNewsThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createNewsThunk.pending]: (state) => {
      state.createNewsLoading = true
     },
     [createNewsThunk.fulfilled]: (state, action) => {
      state.createNewsLoading = false;
      state.news = [...state.news, action.payload.data]
     },
     [createNewsThunk.rejected]: (state) => {
      state.createNewsLoading = false;
     },

     [deleteNewsThunk.pending]: (state) => {
      state.deleteNewsLoading = true
     },
     [deleteNewsThunk.fulfilled]: (state) => {
      state.deleteNewsLoading = false;
     },
     [deleteNewsThunk.rejected]: (state) => {
      state.deleteNewsLoading = false;
     },
  }
})

export default SliderSlice.reducer;