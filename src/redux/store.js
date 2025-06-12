import { configureStore } from '@reduxjs/toolkit';
import rsvpReducer from './rsvpSlice';

export const store = configureStore({
  reducer: {
    rsvp: rsvpReducer,
  },
});
