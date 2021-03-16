import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzsajmfbCmIGGPQTFlvgDWnG0l_qfkido",
  authDomain: "cineflix-1324f.firebaseapp.com",
  projectId: "cineflix-1324f",
  storageBucket: "cineflix-1324f.appspot.com",
  messagingSenderId: "339266063349",
  appId: "1:339266063349:web:0cb9d8cd840d01e83b2ebc",
  measurementId: "G-JWDRQ29YT5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export  {storage} ;

  export {auth}
  export default db;