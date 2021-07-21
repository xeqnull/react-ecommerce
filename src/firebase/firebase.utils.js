import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC85mX-zXvGaqymv2K7jWy9A1Czbhi0Vqw",
    authDomain: "react-ecommerce-320420.firebaseapp.com",
    projectId: "react-ecommerce-320420",
    storageBucket: "react-ecommerce-320420.appspot.com",
    messagingSenderId: "968867687171",
    appId: "1:968867687171:web:9aa711277fad3eb3a95736"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
