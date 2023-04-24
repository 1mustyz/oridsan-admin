import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getStaffs, createStaff, deleteStaff } from '../Network/ServiceClass/Staff';

export const getStaffsThunk = createAsyncThunk('staff/getStaffs', getStaffs);
export const createStaffThunk = createAsyncThunk('staff/createStaff', createStaff);


const initialState = {
  staffs: [],
  loading: false,
  createStaffLoading: false,
  error: {}
}

const StaffSlice = createSlice({
  name: 'staff',
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
  }
})

export default StaffSlice.reducer;