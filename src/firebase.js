import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAjRsMWUQvbtbpWwM6BNM97w4iZY6h5MwI",
    authDomain: "redux-user-auth-48d38.firebaseapp.com",
    projectId: "redux-user-auth-48d38",
    storageBucket: "redux-user-auth-48d38.appspot.com",
    messagingSenderId: "991097552284",
    appId: "1:991097552284:web:5f7e4dc498de9b121d5c59"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }