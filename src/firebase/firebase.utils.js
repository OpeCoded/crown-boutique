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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
