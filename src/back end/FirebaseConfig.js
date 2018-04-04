
import * as firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6Nx0109ulu5wqIMJG5MGRNLwZVxpps0Y",
    authDomain: "mart-s-authen-managenment.firebaseapp.com",
    databaseURL: "https://mart-s-authen-managenment.firebaseio.com",
    projectId: "mart-s-authen-managenment",
    storageBucket: "mart-s-authen-managenment.appspot.com",
    messagingSenderId: "692081130534"
  };

   export const firebaseApp = firebase.initializeApp(config);
   export const auth = firebase.auth();
   export const fProvider = firebase.auth.FacebookAuthProvider;
   export const gProvider = firebase.auth.GoogleAuthProvider;
   export const _firebase = firebase;