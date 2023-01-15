import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    getCategories: (state) => {
      state.isLoading = true;
    },
    getCategoriesFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCategories, getCategoriesFail, getCategoriesSuccess } =
  categoriesReducer.actions;

export default categoriesReducer.reducer;
