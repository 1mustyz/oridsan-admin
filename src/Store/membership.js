import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMemberships, createMembership } from '../Network/ServiceClass/Membership';

export const getMembershipsThunk = createAsyncThunk('membership/getMemberships', getMemberships);
export const createMembershipThunk = createAsyncThunk('membership/createMembership', createMembership);


const initialState = {
  memberships: [],
  loading: false,
  createMembershipLoading: false
}

const MembershipSlice = createSlice({
  name: 'membership',
  initialState,
  extraReducers: {
    [getMembershipsThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getMembershipsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.memberships = action.payload.data
    },
    [getMembershipsThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createMembershipThunk.pending]: (state) => {
      state.createMembershipLoading = true
     },
     [createMembershipThunk.fulfilled]: (state, action) => {
      state.createMembershipLoading = false;
      state.memberships = [...state.memberships, action.payload.data]
     },
     [createMembershipThunk.rejected]: (state) => {
      state.createMembershipLoading = false;
     },
  }
})

export default MembershipSlice.reducer;