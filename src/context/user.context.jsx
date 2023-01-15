// import { useEffect, createContext, useReducer } from "react";
// import {
//   createUserDocFromAuth,
//   onAuthStateChangedListener,
// } from "../utils/firebase/firebase.utils";
// import { createAction } from "../utils/reducer/reducer.utils";

// // Actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         ...payload,
//       };

//     default:
//       throw new Error(`Unhandler type: ${type} in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

//   const setCurrentUser = (user) => {
//     const action = createAction(USER_ACTION_TYPES.SET_CURRENT_USER, {
//       currentUser: user,
//     });
//     dispatch(action);
//   };

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
// const unsubscribe = onAuthStateChangedListener((user) => {
//   if (user) {
//     createUserDocFromAuth(user);
//   }
//   setCurrentUser(user);
// });
// return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
