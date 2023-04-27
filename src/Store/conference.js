import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getConferences, createConference, deleteConference} from '../Network/ServiceClass/Conference'

export const getConferencesThunk = createAsyncThunk('conference/getConferences', getConferences);
export const createConferenceThunk = createAsyncThunk('conference/createConference', createConference);
export const deleteConferenceThunk = createAsyncThunk('conference/deleteConference', deleteConference);



const initialState = {
  conferences: [],
  loading: false,
  createConferenceLoading: false,
  deleteConferenceLoading: false

}

const ConferenceSlice = createSlice({
  name: 'conference',
  initialState,
  extraReducers: {
    [getConferencesThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getConferencesThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.conferences = action.payload.data
    },
    [getConferencesThunk.rejected]: (state, action) => {
      state.loading = false;
    },

    [createConferenceThunk.pending]: (state) => {
      state.createConferenceLoading = true
     },
     [createConferenceThunk.fulfilled]: (state, action) => {
      state.createConferenceLoading = false;
      state.conferences = [...state.conferences, action.payload.data]
     },
     [createConferenceThunk.rejected]: (state) => {
      state.createConferenceLoading = false;
     },

     [deleteConferenceThunk.pending]: (state) => {
      state.deleteConferenceLoading = true
     },
     [deleteConferenceThunk.fulfilled]: (state) => {
      state.deleteConferenceLoading = false;
     },
     [deleteConferenceThunk.rejected]: (state) => {
      state.deleteConferenceLoading = false;
     },
  }
})

export default ConferenceSlice.reducer;