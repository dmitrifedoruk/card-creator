import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCZ5HcjLoFCOZ_sG4cAJ3VgFEJtucfkLIg",
    authDomain: "card-creator-d.firebaseapp.com",
    databaseURL: "https://card-creator-d.firebaseio.com",
    projectId: "card-creator-d",
    storageBucket: "card-creator-d.appspot.com",
    messagingSenderId: "279300141877"
};


firebase.initializeApp(config);

const db = firebase.firestore();

export default db;