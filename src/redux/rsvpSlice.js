import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  attending: 'yes',
  numberOfGuests: 1,
  message: '',
  submitted: false,
};

export const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    submitRSVP: (state) => {
      state.submitted = true;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, submitRSVP, resetForm } = rsvpSlice.actions;

export default rsvpSlice.reducer;
