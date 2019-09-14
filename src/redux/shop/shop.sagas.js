import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  //we wrapped the major code to fetch collections from the db with try and catch block... to get our error if the it occurs
  try {
    //collectionRef: to fetch collections from the db
    const collectionRef = firestore.collection("collections");
    //we  declare a var snapshot to hold the yielded value of our collectionRef.get()
    const snapshot = yield collectionRef.get();
    //creating our collections map to convert our snapshot to Map using a Saga Effect called call (all call does is to invoke a method, it takes in a method as the first param and the what is passed into the method as the second param)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //firing off the collectionsMap into a dispatch fetchCollectionSuccess if successful
    //putting or dispatching our fetchCollectionsSuccess action and pass on our collectionsMap
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    //putting or dispatching our error acton to get the errors
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
