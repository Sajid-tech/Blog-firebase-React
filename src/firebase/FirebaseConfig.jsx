// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDlnEBVuGqX1ISoLTtcIYE7hq8lfX_kMA",
  authDomain: "traveljunkies-34cae.firebaseapp.com",
  projectId: "traveljunkies-34cae",
  storageBucket: "traveljunkies-34cae.appspot.com",
  messagingSenderId: "846524897965",
  appId: "1:846524897965:web:32b2232c5f7ba1b9fd4424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
