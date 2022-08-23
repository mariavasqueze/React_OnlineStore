import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8gJA8mu-HPQl-Et05DDqlLBSzkgy0wms",
    authDomain: "ironside-clothing-db.firebaseapp.com",
    projectId: "ironside-clothing-db",
    storageBucket: "ironside-clothing-db.appspot.com",
    messagingSenderId: "770447782577",
    appId: "1:770447782577:web:caba87659ce1ac02822890"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // set authentication
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    //if user data exists
        //return userDocRef

    //if not exists
        //create user data in collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log('Error creating the user', error.message);
        }
    }
  
  }