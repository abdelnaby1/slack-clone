// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDd791UNkhVnfTmI95L6sYTIB9VDRPXd_0",
    authDomain: "slack-clone-47202.firebaseapp.com",
    projectId: "slack-clone-47202",
    storageBucket: "slack-clone-47202.appspot.com",
    messagingSenderId: "985114086939",
    appId: "1:985114086939:web:c5724207af439e8dac72be",
    measurementId: "G-P6LP6J5FCB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider}
  export default db