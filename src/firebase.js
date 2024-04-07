import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL3kx7AO6qA3n7rb_IwiYBNMNrPQDqmLI",
  authDomain: "fir-auth-1132-d3615.firebaseapp.com",
  projectId: "fir-auth-1132-d3615",
  storageBucket: "fir-auth-1132-d3615.appspot.com",
  messagingSenderId: "672197871254",
  appId: "1:672197871254:web:de70372fc99bc6227464b7",
  measurementId: "G-JG8L2DDB5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };