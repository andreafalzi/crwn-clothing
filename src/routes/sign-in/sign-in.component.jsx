import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithFacebookPopup, signInWithGoogleRedirect } from '../../utilities/firebase/firebase.utilities';

const SignIn = () => {
  //implementing a redirect log-in, where we use the useEffect and getRedirectResult to track the response after the user has left our webapp to log-in and when it comes back our website is waiting for the information to get stored
  useEffect(
    () =>
      async function logGoogleRedirectUser() {
        const response = await getRedirectResult(auth);
        console.log(response);
        if (response) {
          // eslint-disable-next-line no-unused-vars
          const userDocRef = await createUserDocumentFromAuth(response.user);
        }
      },
    []
  );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popus</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      <button onClick={logFacebookUser}>Sign in with Facebook Popus</button>
    </>
  );
};

export default SignIn;
