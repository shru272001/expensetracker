import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyCDol2JIUn0djwXdbrXiMlUTRIXThZh0Jk",
    authDomain: "express-61eb9.firebaseapp.com",
    databaseURL: "https://express-61eb9.firebaseio.com",
    projectId: "express-61eb9",
    storageBucket: "express-61eb9.appspot.com",
    messagingSenderId: "873071771070",
    appId: "1:873071771070:web:79cbbdf9a9731b06080def",
    measurementId: "G-ZXV2ZWFMMS"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase