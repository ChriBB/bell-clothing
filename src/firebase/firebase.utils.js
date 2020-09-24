import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBRmWy1KW79YmDdSyXwSX_XifINSCNZlUU",
        authDomain: "bell-db.firebaseapp.com",
        databaseURL: "https://bell-db.firebaseio.com",
        projectId: "bell-db",
        storageBucket: "bell-db.appspot.com",
        messagingSenderId: "376948054972",
        appId: "1:376948054972:web:12bc610d27eaf6cc2029b9",
        measurementId: "G-1L4LP1L51Z"
  };

  firebase.initializeApp(config);

// export firebase auth and firestore
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

// Google authentication, this gives acces to new GoogleAuthProvider class from auth library 
const provider = new firebase.auth.GoogleAuthProvider();
// lets pop-up appear when GoogleAuthProvider is used
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;