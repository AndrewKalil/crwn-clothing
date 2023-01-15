import { createSelector } from "reselect";

const selectorUserReducer = (state) => state.user;

export const selectUser = createSelector(
  [selectorUserReducer],
  (user) => user.currentUser
);
