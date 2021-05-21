import  firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const app = firebase.initializeApp({
   
    apiKey: "AIzaSyAT3lh488-9EFXkYE6CsS3FeYhziTHQo-E",
  authDomain: "jobportal-d5683.firebaseapp.com",
  projectId: "jobportal-d5683",
  storageBucket: "jobportal-d5683.appspot.com",
  messagingSenderId: "756453413760",
  appId: "1:756453413760:web:deda71ff91dfa5f70ee765"
  });
  // Initialize Firebase
 
  export const auth=app.auth()
  export const firestore=app.firestore()
   export const storage=app.storage()
  export default app;