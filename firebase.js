import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX_AdWx9wOwXSi9uHGyg60fyA8RljAPXg",
  authDomain: "signal-native-73f7a.firebaseapp.com",
  projectId: "signal-native-73f7a",
  storageBucket: "signal-native-73f7a.appspot.com",
  messagingSenderId: "1081718260766",
  appId: "1:1081718260766:web:fb19f9ac9c6ac9a1099a0f"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
