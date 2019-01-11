import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
var config = {
    apiKey: "AIzaSyB7DqGadJCKDX_pI_KTj9HgaBrtdsl_sJY",
    authDomain: "net-ninja-marioplan-43f7c.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-43f7c.firebaseio.com",
    projectId: "net-ninja-marioplan-43f7c",
    storageBucket: "net-ninja-marioplan-43f7c.appspot.com",
    messagingSenderId: "644700419861"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;