import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCZ7l9yNjzhrZOZ1w7xGB4MgRnIpoDidoc",
  authDomain: "react-playground-c8923.firebaseapp.com",
  databaseURL: "https://react-playground-c8923.firebaseio.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
