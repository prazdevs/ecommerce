import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDrT-xiGpdpJ8CT7O5k9pzaaHa1psysmU4",
  authDomain: "ecommerce-a0184.firebaseapp.com",
  databaseURL: "https://ecommerce-a0184.firebaseio.com",
  projectId: "ecommerce-a0184",
  storageBucket: "ecommerce-a0184.appspot.com",
  messagingSenderId: "298606182897",
  appId: "1:298606182897:web:615a7e94bdf79784480450",
  measurementId: "G-H3FF3W4GKZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;