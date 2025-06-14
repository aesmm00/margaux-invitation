import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://script.google.com/macros/s/AKfycbwbKh3OP1VS7Fbq3FLOvygQJQrhAPRNCVASD4kMiuz8fKtGQoR85oyRPv4pCQT468gDiQ/exec';

export const submitRSVP = createAsyncThunk(
  'rsvp/submit',
  async (_, { getState }) => {
    const state = getState().rsvp;
    const submissions = [];

    // Submit adult RSVPs
    for (const name of state.adultNames) {
      if (name.trim()) {
        submissions.push(
          fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                sheetName: 'Adult RSVP',
                name: name,
                rsvp: state.attending === 'yes' ? 'Accepted' : 'Declined',
                message: state.message
              })
          })
        );
      }
    }

    // Submit kid RSVPs if hasKids is true
    if (state.hasKids) {
      for (const name of state.kidNames) {
        if (name.trim()) {
          submissions.push(
            fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                  sheetName: 'Kids RSVP',
                  name: name,
                  rsvp: state.attending === 'yes' ? 'Accepted' : 'Declined',
                  message: state.message
                })
            })
          );
        }
      }
    }

    await Promise.all(submissions);
  }
);

const initialState = {
  adultNames: [''],
  hasKids: false,
  kidNames: [''],
  attending: 'yes',
  message: '',
  submitted: false,
  submitting: false,
  error: null
};

export const rsvpSlice = createSlice({
  name: 'rsvp',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value, index } = action.payload;
      if (field === 'adultNames' || field === 'kidNames') {
        state[field][index] = value;
      } else {
        state[field] = value;
      }
    },
    addName: (state, action) => {
      const { field } = action.payload;
      state[field].push('');
    },
    removeName: (state, action) => {
      const { field, index } = action.payload;
      state[field].splice(index, 1);
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitRSVP.pending, (state) => {
        state.submitting = true;
        state.error = null;
      })
      .addCase(submitRSVP.fulfilled, (state) => {
        state.submitting = false;
        state.submitted = true;
        state.error = null;
      })
      .addCase(submitRSVP.rejected, (state, action) => {
        state.submitting = false;
        state.error = action.error.message;
      });
  },
});

export const { updateField, resetForm, addName, removeName } = rsvpSlice.actions;

export default rsvpSlice.reducer;
