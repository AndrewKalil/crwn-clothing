import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    checkUserSession: (state) => {
      state.isLoading = true;
    },
    googleSignIn: (state) => {
      state.isLoading = true;
    },
    emailSignIn: (state, action) => {
      state.isLoading = true;
    },
    signInSuccess: (state, { _, payload }) => {
      // payload = user
      if (payload) {
        state.currentUser = payload;
      } else {
        state.currentUser = null;
      }
      state.isLoading = false;
    },
    signInFail: (state, { _, payload }) => {
      // payload = error
      state.error = payload;
      state.isLoading = false;
    },
    signUp: (state, action) => {
      state.isLoading = true;
    },
    signUpSuccess: (state, action) => {
      state.isLoading = false;
    },
    signUpFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    signOut: (state) => {
      state.isLoading = true;
    },
    signOutSuccess: (state) => {
      state.isLoading = false;
      state.currentUser = null;
    },
    signOutFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  checkUserSession,
  emailSignIn,
  googleSignIn,
  signInFail,
  signInSuccess,
  signUp,
  signUpFail,
  signUpSuccess,
  signOut,
  signOutFail,
  signOutSuccess,
} = userReducer.actions;

export default userReducer.reducer;
