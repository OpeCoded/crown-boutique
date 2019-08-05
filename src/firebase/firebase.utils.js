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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;