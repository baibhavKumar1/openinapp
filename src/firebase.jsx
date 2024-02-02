// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgbAJadFgPsPH7HePLELKCQjF81WXmwsY",
  authDomain: "ibm-nextjs.firebaseapp.com",
  projectId: "ibm-nextjs",
  storageBucket: "ibm-nextjs.appspot.com",
  messagingSenderId: "204087607013",
  appId: "1:204087607013:web:a71fe6319a9d5b4e55de0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth}