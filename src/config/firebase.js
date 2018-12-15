import firebase, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { firebaseSecrets } from "./secrets";

var config = {
  apiKey: firebaseSecrets.apiKey,
  authDomain: firebaseSecrets.authDomain,
  databaseURL: firebaseSecrets.databaseURL,
  projectId: firebaseSecrets.projectId,
  storageBucket: "",
  messagingSenderId: firebaseSecrets.messagingSenderId
};
firebase.initializeApp(config);

export default firebase;
