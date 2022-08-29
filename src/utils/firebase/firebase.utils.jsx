import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB8gJA8mu-HPQl-Et05DDqlLBSzkgy0wms",
	authDomain: "ironside-clothing-db.firebaseapp.com",
	projectId: "ironside-clothing-db",
	storageBucket: "ironside-clothing-db.appspot.com",
	messagingSenderId: "770447782577",
	appId: "1:770447782577:web:caba87659ce1ac02822890",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// set authentication
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//send information to firebase db
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase());
		batch.set(docRef, object);
	});

	await batch.commit();
	console.log("done");
};

//Get information from firebase db
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef);
  
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  };

  

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {}
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	//if not exists
	//create user data in collection
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("Error creating the user", error.message);
		}
	}
	//if user data exists
	//return userDocRef
	return userDocRef;
};

//validate (create) user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	//end function if no email or password received
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

//sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	//end function if no email or password received
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

//sign out user method
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
