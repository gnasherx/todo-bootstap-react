import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyC-2fAMpZ81gAa0q1mg28V9IMTqz-Yr4bk",
  authDomain: "todo-bootstrap-react.firebaseapp.com",
  databaseURL: "https://todo-bootstrap-react.firebaseio.com",
  projectId: "todo-bootstrap-react",
  storageBucket: "todo-bootstrap-react.appspot.com",
  messagingSenderId: "31533151727"
};
firebase.initializeApp(config);

export default firebase;
