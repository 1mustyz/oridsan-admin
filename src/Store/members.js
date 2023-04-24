import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMembers, approveApplication } from '../Network/ServiceClass/Members';

export const getAllMembersThunk = createAsyncThunk('members/getAllMembers', getAllMembers);
export const approveApplicationThunk = createAsyncThunk('membership/approveApplication', approveApplication);


const initialState = {
  members: [],
  loading: false,
  approveApplicationLoading: false
}

const MemberSlice = createSlice({
  name: 'member',
  initialState,
  extraReducers: {
    [getAllMembersThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllMembersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.members = action.payload.data
    },
    [getAllMembersThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [approveApplicationThunk.pending]: (state) => {
      state.approveApplicationLoading = true
     },
     [approveApplicationThunk.fulfilled]: (state) => {
      state.approveApplicationLoading = false;
     },
     [approveApplicationThunk.rejected]: (state) => {
      state.approveApplicationLoading = false;
     },
  }
})

export default MemberSlice.reducer;