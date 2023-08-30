
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCX_45E98-BwhlCV6BYmnNAPCeVe06gpME",
    authDomain: "clone-ac161.firebaseapp.com",
    projectId: "clone-ac161",
    storageBucket: "clone-ac161.appspot.com",
    messagingSenderId: "274469842577",
    appId: "1:274469842577:web:bc9b7c46d37ee27daa9930",
    measurementId: "G-V4WZ3207HE"
  };

  const firebaseApp= initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const authApp= getAuth(firebaseApp);
  console.log(authApp)
  export { authApp }
  export default db;
