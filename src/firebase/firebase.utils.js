import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA303cG2O2AyDHGO3gBCumZEp1lLJlVuak',
  authDomain: 'crwn-db-8d6b1.firebaseapp.com',
  databaseURL: 'https://crwn-db-8d6b1.firebaseio.com',
  projectId: 'crwn-db-8d6b1',
  storageBucket: 'crwn-db-8d6b1.appspot.com',
  messagingSenderId: '901264007448',
  appId: '1:901264007448:web:a3b777eb06a42e8f2b3e6d',
  measurementId: 'G-Z7KFM7RDC6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
