import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
} from "./category.reducer";

// export const fetchCategoriesAsync1 = () => {
//   return async (dispatch) => {
//     // dispatch(getCategories());
//     try {
//       const categoriesArray = await getCategoriesAndDocuments();
//       dispatch(getCategoriesSuccess(categoriesArray));
//     } catch (error) {
//       dispatch(getCategoriesFail(error));
//     }
//   };
// };

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(getCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(getCategoriesFail(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(getCategories, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
