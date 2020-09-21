import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrLx7Fv0164ZD65tP-JKHUHCBNfLD28PY",
    //     authDomain: "todo-app-kay.firebaseapp.com",
    //     databaseURL: "https://todo-app-kay.firebaseio.com",
    //     projectId: "todo-app-kay",
    //     storageBucket: "todo-app-kay.appspot.com",
    //     messagingSenderId: "551824655009",
    //     appId: "1:551824655009:web:2739af278da6f34ca6a6e0",
    //     measurementId: "G-FNGEJ9GFWR"
});

const db = firebaseApp.firestore();

export default db;