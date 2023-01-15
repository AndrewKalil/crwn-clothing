import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
} from "./category.reducer";

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(getCategories());
    try {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(getCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(getCategoriesFail(error));
    }
  };
};
