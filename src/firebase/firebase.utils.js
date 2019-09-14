import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBWkeHqD1k71scA7LJ0u4HVyuGO28dfpQ",
  authDomain: "crown-boutique.firebaseapp.com",
  databaseURL: "https://crown-boutique.firebaseio.com",
  projectId: "crown-boutique",
  storageBucket: "",
  messagingSenderId: "458338306331",
  appId: "1:458338306331:web:6e109ffab9ebb051"
};

//taking the user auth object from our auth library and store inside of our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //getting the userRef location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //querrying the db if a userRef snapShot exists
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    //create a user using the userRef data
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //creating a new user using .set
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

//utils for adding collections into the database, so we will call addCollectionAndDocuments where we have access to our shop data, we will use App.js
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //we used this to create a batch collection in the db programmaticaly
  //creating the collection (firestore.collection) using the collection key
  //note: firebase will give us a collection ref object back
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//this function gets the whole collections snapshot from our db in form of array, then
//we convert it to a map
export const convertCollectionsSnapshotToMap = collections => {
  //we want to modify or transform our doc objects into a useable form (map)
  const transformedCollection = collections.docs.map(doc => {
    //pulling off the title and item from the map
    const { title, items } = doc.data();

    //we are returning an actual object from the map, that reps the final object representing all the data we want for our front end
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  //now we are converting the object map (to the way we want it to look in our app) inside of our reducer
  return transformedCollection.reduce((accumulator, collections) => {
    //we pass in an initial object ie {}, which goes into the first new collection [key] in lowercase
    //and returns the object...the object in this case is accumulator
    accumulator[collections.title.toLowerCase()] = collections;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
