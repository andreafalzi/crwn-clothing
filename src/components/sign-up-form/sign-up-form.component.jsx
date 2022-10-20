import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utilities';
//replaced by a Firebase method call onAuthStateChanged
// import { UserContext } from '../../contexts/user.context';

import { SignUpContainer } from './sign-up-form.style';
import Button from '../button/button.component';

const defaultformFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //replaced by a Firebase method call onAuthStateChanged
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert('password is wrong');
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      //replaced by a Firebase method call onAuthStateChanged
      // setCurrentUser(user);

      //display name is an obj that we have add in the prev createuserDocumentFromAuth method to get the user displayName
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      alert('You have successfully create your new account!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use');
      } else {
        console.log('user creation error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput labelName='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput labelName='Email' type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput labelName='Password' type='password' required onChange={handleChange} name='password' value={password} />
        <FormInput labelName='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
