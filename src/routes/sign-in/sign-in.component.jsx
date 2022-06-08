import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  return (
    <>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popus</button>
    </>
  );
};

export default SignIn;
