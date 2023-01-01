// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlho4pBrdsGGX46870cDVATwn4kAokJf4",
  authDomain: "gymiosapp-cb2d6.firebaseapp.com",
  projectId: "gymiosapp-cb2d6",
  storageBucket: "gymiosapp-cb2d6.appspot.com",
  messagingSenderId: "743065824604",
  appId: "1:743065824604:web:69a9015fb24bf4b880a599",
  measurementId: "G-7V4W5CKWRW"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };