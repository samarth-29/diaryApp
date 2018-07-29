
import * as firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiiOObc651G4JxhNGfF7r2-wA1aQhduTk",
    authDomain: "diary-113fa.firebaseapp.com",
    databaseURL: "https://diary-113fa.firebaseio.com",
    projectId: "diary-113fa",
    storageBucket: "",
    messagingSenderId: "497737140419"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
