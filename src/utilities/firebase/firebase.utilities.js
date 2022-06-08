// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOb29hiSm6myGb_EGiuEaN9lO7aBDa9z8',
  authDomain: 'crwn-clothing-db-64cee.firebaseapp.com',
  projectId: 'crwn-clothing-db-64cee',
  storageBucket: 'crwn-clothing-db-64cee.appspot.com',
  messagingSenderId: '967617194275',
  appId: '1:967617194275:web:1ac207173dece58b7d0496',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  promt: 'select_account',
});

facebookProvider.setCustomParameters({
  promt: 'select_account',
});

//auth is a firebase method that give us the chance to keep tracking the authentication of our user even if it leave our website
export const auth = getAuth();

//Google SIGN-IN
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Facebook SIGN-IN
export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
export const signInWitFacebookRedirect = () => signInWithRedirect(auth, facebookProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // doc() call from the database=db a collection='users' and looking for the document with the uniqueID=userAuth.uid
  const userDocRef = doc(db, 'users', userAuth.uid);

  //getDoc retrive the document and we use the method .exists() to check if the document is already inside the collection 'users'
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  //logic to check if userSnapshot exists or not
  //if user data does not exist
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const providerData = userAuth.providerData[0].providerId;
    const createdAt = new Date();

    try {
      //setDoc crate the new document and we are passing an OBJ with the values and key that we want inside it
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        providerData,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //if user data exist
  //return userDocRef
  return userDocRef;
};
