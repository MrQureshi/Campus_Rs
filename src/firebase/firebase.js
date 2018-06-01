import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMzdl1lNaaFOwmqYKWoombyeGGDhH2ffg",
    authDomain: "campus-rs.firebaseapp.com",
    databaseURL: "https://campus-rs.firebaseio.com",
    projectId: "campus-rs",
    storageBucket: "campus-rs.appspot.com",
    messagingSenderId: "490207553800"
};

firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};