import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth";

// Basic Config
const config = {
  apiKey: "AIzaSyCAfLcL6x9ZHmMXIHKQ9qn28N86wY3fris",
  authDomain: "crwn-shop-db-3c3c3.firebaseapp.com",
  projectId: "crwn-shop-db-3c3c3",
  storageBucket: "crwn-shop-db-3c3c3.appspot.com",
  messagingSenderId: "150696341373",
  appId: "1:150696341373:web:b6c9857b4fdf78887d6614",
};

// Store authenticated users into db
export const createUserProfilDocument = async (userAuth, additionalData) => {
  // If signin out, no need to do anything, exit the func
  if (!userAuth) return;

  // Query firestore to see if user already exists & create a new user in the db if it dosnt
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
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
