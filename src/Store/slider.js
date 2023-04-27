import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSliders,createSlider,deleteSlider } from '../Network/ServiceClass/Slider';

export const getSlidersThunk = createAsyncThunk('slider/getSliders', getSliders);
export const createSliderThunk = createAsyncThunk('slider/createSlider', createSlider);
export const deleteSliderThunk = createAsyncThunk('slider/deleteSlider', deleteSlider);



const initialState = {
  sliders: [],
  loading: false,
  createSliderLoading: false,
  deleteSliderLoading: false

}

const SliderSlice = createSlice({
  name: 'slider',
  initialState,
  extraReducers: {
    [getSlidersThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getSlidersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.sliders = action.payload.data
    },
    [getSlidersThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createSliderThunk.pending]: (state) => {
      state.createSliderLoading = true
     },
     [createSliderThunk.fulfilled]: (state, action) => {
      state.createSliderLoading = false;
      state.sliders = [...state.sliders, action.payload.data]
     },
     [createSliderThunk.rejected]: (state) => {
      state.createSliderLoading = false;
     },

     [deleteSliderThunk.pending]: (state) => {
      state.deleteSliderLoading = true
     },
     [deleteSliderThunk.fulfilled]: (state) => {
      state.deleteSliderLoading = false;
     },
     [deleteSliderThunk.rejected]: (state) => {
      state.deleteSliderLoading = false;
     },
  }
})

export default SliderSlice.reducer;