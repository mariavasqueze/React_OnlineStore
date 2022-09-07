import {takeLatest, all, call, put} from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";


//generators - respond to actions like switch sattements
export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        //use put as dispatch
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch(error) {
        yield(fetchCategoriesFailed(error));
    }
}
 

export function* onFetchCategories() {
    //select the latest action (action type, what you want to happen)
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

//agregator function
export function* categoriesSaga() {
    //only complete when all is done (yield == "stop sign")
    yield all([call(onFetchCategories)])
}
