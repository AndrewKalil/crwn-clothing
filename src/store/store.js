import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());

//   next(action);

//   console.log("nextState", store.getState());
// };

const persistedReducer = persistReducer(
  {
    key: "root",
    storage: storage,
    whitelist: ["cart"],
  },
  rootReducer
);

const sagaMiddleware = createSagaMiddleware();

// root reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      [process.env.NODE_ENV === "development" && logger, sagaMiddleware].filter(
        Boolean
      )
    ),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
