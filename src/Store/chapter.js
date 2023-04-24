import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getChapters, createChapter, deleteChapter} from '../Network/ServiceClass/Chapter'

export const getChaptersThunk = createAsyncThunk('chapter/getChapters', getChapters);
export const createChapterThunk = createAsyncThunk('chapter/createChapter', createChapter);
export const deleteChapterThunk = createAsyncThunk('chapter/deleteChapter', deleteChapter);


const initialState = {
  chapters: [],
  loading: false,
  createChapterLoading: false,
  deleteChapterLoading: false,

}

const ChapterSlice = createSlice({
  name: 'chapter',
  initialState,
  extraReducers: {
    [getChaptersThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getChaptersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.chapters = action.payload.data
    },
    [getChaptersThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createChapterThunk.pending]: (state) => {
      state.createChapterLoading = true
     },
     [createChapterThunk.fulfilled]: (state, action) => {
      state.createChapterLoading = false;
      if(action?.payload?.isError === undefined) state.chapters = [...state.chapters, action?.payload?.data]
     },
     [createChapterThunk.rejected]: (state,action) => {
      state.createChapterLoading = false;
     },


     [deleteChapterThunk.pending]: (state) => {
      state.deleteChapterLoading = true
     },
     [deleteChapterThunk.fulfilled]: (state, action) => {
      state.deleteChapterLoading = false;
     },
     [deleteChapterThunk.rejected]: (state,action) => {
      state.deleteChapterLoading = false;
     },
  }
})

export default ChapterSlice.reducer;