import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithFacebookPopup, signInWithGoogleRedirect } from '../../utilities/firebase/firebase.utilities';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
  //implementing a redirect log-in, where we use the useEffect and getRedirectResult to track the response after the user has left our webapp to log-in and when it comes back our website is waiting for the information to get stored
  useEffect(
    () =>
      async function logGoogleRedirectUser() {
        const response = await getRedirectResult(auth);
        // console.log(response);
        if (response) {
          await createUserDocumentFromAuth(response.user);
        }
      },
    []
  );
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <SignInForm loginMethod={logGoogleUser} />
      {/* <Button buttonType='google' onClick={logGoogleUser}>
        Sign in with Google
      </Button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      <button onClick={logFacebookUser}>Sign in with Facebook Popus</button> */}
      <SignUpForm />
    </>
  );
};

export default Authentication;
