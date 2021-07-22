import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVpHPGy0S78RmWJD26D2VZnz34ta52sHo",
    authDomain: "speed-bf12a.firebaseapp.com",
    projectId: "speed-bf12a",
    storageBucket: "speed-bf12a.appspot.com",
    messagingSenderId: "915157476032",
    appId: "1:915157476032:web:0f0497c5024eebfa3c8325",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;