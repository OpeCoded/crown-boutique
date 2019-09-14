//this is the action that pass our collections map from firebase to our reducer
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    //getting the data using OnSnapshot, ie whenever the collectionRef updates or whenever the code gets run for the first time
    //the collectionref will send us the snapshot representing the code of our collections objects array at the tiem when this code renders

    //we are using promise pattern here now (async get request / api call)
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        //updateCollections(collectionsMap);
        //after the collections have being loaded completely, we set isLoading state to false
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
