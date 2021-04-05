import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL_OzW4Rb3ImxNfoCpIrn18ivHYPKjMl0",
  authDomain: "riding-bom-hackathon.firebaseapp.com",
  projectId: "riding-bom-hackathon",
  storageBucket: "riding-bom-hackathon.appspot.com",
  messagingSenderId: "1004332641386",
  appId: "1:1004332641386:web:5dcb34e3b4b0fb8b7e6e13"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
