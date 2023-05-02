import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPresident,createPresident,deletePresident,  makeCurrentPresident} from '../Network/ServiceClass/President';

export const getPresidentThunk = createAsyncThunk('president/getPresident', getPresident);
export const createPresidentThunk = createAsyncThunk('president/createPresident', createPresident);
export const deletePresidentThunk = createAsyncThunk('president/deletePresident', deletePresident);
export const makeCurrentPresidentThunk = createAsyncThunk('president/makeCurrentPresident', makeCurrentPresident);

const initialState = {
  presidents: [],
  loading: false,
  createPresidentLoading: false,
  deletePresidentLoading: false

}

const SliderSlice = createSlice({
  name: 'president',
  initialState,
  extraReducers: {
    [getPresidentThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getPresidentThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.presidents = action.payload.data
    },
    [getPresidentThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createPresidentThunk.pending]: (state) => {
      state.createPresidentLoading = true
     },
     [createPresidentThunk.fulfilled]: (state, action) => {
      state.createPresidentLoading = false;
      state.presidents = [...state.presidents, action.payload.data]
     },
     [createPresidentThunk.rejected]: (state) => {
      state.createPresidentLoading = false;
     },

     [deletePresidentThunk.pending]: (state) => {
      state.deletePresidentLoading = true
     },
     [deletePresidentThunk.fulfilled]: (state) => {
      state.deletePresidentLoading = false;
     },
     [deletePresidentThunk.rejected]: (state) => {
      state.deletePresidentLoading = false;
     },

     [makeCurrentPresident.pending]: (state) => {
      state.loading = true
     },
     [makeCurrentPresident.fulfilled]: (state) => {
      state.loading = false;
     },
     [makeCurrentPresident.rejected]: (state) => {
      state.loading = false;
     },
  }
})

export default SliderSlice.reducer;