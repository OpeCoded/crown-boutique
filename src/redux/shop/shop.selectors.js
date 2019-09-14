import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//this selector converts our selectCollections object into an array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //checking if the collections exists, else return an empty collections array
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

//so here we are matching the url param of our collection id map to respective collection
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    //checking if collections exists, then return collections with the collection url param else return null
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

//to check whether the collection value is actually loaded
export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
