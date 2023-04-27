import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStaffs, createStaff, deleteStaff, grandStaff, revokeStaff, getDashBoard } from '../Network/ServiceClass/Staff';

export const getStaffsThunk = createAsyncThunk('staff/getStaffs', getStaffs);
export const createStaffThunk = createAsyncThunk('staff/createStaff', createStaff);
export const deleteStaffThunk = createAsyncThunk('staff/deleteStaff', deleteStaff);
export const grandStaffThunk = createAsyncThunk('staff/grandStaff', grandStaff);
export const revokeStaffThunk = createAsyncThunk('staff/revokeStaff', revokeStaff);
export const getDashBoardThunk = createAsyncThunk('staff/getDashBoard', getDashBoard);



const initialState = {
  staffs: [],
  loading: false,
  createStaffLoading: false,
  deleteStaffLoading: false,
  error: {}
}

const StaffSlice = createSlice({
  name: 'staff',
  dashboard: null,
  initialState,
  extraReducers: {
    [getStaffsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getStaffsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.staffs = action.payload.data
    },
    [getStaffsThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createStaffThunk.pending]: (state) => {
      state.createStaffLoading = true
     },
     [createStaffThunk.fulfilled]: (state, action) => {
      state.createStaffLoading = false;
     },
     [createStaffThunk.rejected]: (state,action) => {
      state.createStaffLoading = false;
     },

     [deleteStaffThunk.pending]: (state) => {
      state.deleteStaffLoading = true
     },
     [deleteStaffThunk.fulfilled]: (state, action) => {
      state.deleteStaffLoading = false;
     },
     [deleteStaffThunk.rejected]: (state,action) => {
      state.deleteStaffLoading = false;
     },

     [grandStaffThunk.pending]: (state) => {
      state.loading = true
     },
     [grandStaffThunk.fulfilled]: (state, action) => {
      state.loading = false;
     },
     [grandStaffThunk.rejected]: (state,action) => {
      state.loading = false;
     },

     [revokeStaffThunk.pending]: (state) => {
      state.loading = true
     },
     [revokeStaffThunk.fulfilled]: (state, action) => {
      state.loading = false;
     },
     [revokeStaffThunk.rejected]: (state,action) => {
      state.loading = false;
     },

     [getDashBoardThunk.pending]: (state) => {
      state.loading = true
     },
     [getDashBoardThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.dashboard = action.payload.data
     },
     [getDashBoardThunk.rejected]: (state,action) => {
      state.loading = false;
     },
  }
})

export default StaffSlice.reducer;