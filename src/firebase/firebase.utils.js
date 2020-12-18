import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAfLcL6x9ZHmMXIHKQ9qn28N86wY3fris",
  authDomain: "crwn-shop-db-3c3c3.firebaseapp.com",
  projectId: "crwn-shop-db-3c3c3",
  storageBucket: "crwn-shop-db-3c3c3.appspot.com",
  messagingSenderId: "150696341373",
  appId: "1:150696341373:web:b6c9857b4fdf78887d6614",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
