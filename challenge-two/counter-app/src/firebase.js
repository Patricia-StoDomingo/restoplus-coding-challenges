import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfOPAgVyHi6cTjZm4Y4GPFbPRVsnAiLbE",
  authDomain: "test-project-24989.firebaseapp.com",
  databaseURL: "https://test-project-24989-default-rtdb.firebaseio.com",
  projectId: "test-project-24989",
  storageBucket: "test-project-24989.appspot.com",
  messagingSenderId: "31074402942",
  appId: "1:31074402942:web:6a9fb933cac76de59f0e2f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
