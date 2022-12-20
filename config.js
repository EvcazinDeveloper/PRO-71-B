import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC1-Cp2G0Di5tENzafT-kj1wgnGKMd4EG4",
  authDomain: "project-71-7c1b9.firebaseapp.com",
  projectId: "project-71-7c1b9",
  storageBucket: "project-71-7c1b9.appspot.com",
  messagingSenderId: "761423147043",
  appId: "1:761423147043:web:b7ce1cb702eab58d3c4196"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
