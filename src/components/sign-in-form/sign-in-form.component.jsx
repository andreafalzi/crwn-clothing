import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

//replaced by a Firebase method call onAuthStateChanged
// import { UserContext } from '../../contexts/user.context';

import { SignInContainer, ButtonsContainer } from './sign-in-form.style';

const defaultformFields = {
  email: '',
  password: '',
};

const SignInForm = ({ loginMethod }) => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

  //replaced by a Firebase method call onAuthStateChanged
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      //replaced by a Firebase method call onAuthStateChanged
      // setCurrentUser(user);

      resetFormFields();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User does not exist!');
      }
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password!');
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput labelName='email' type='text' required onChange={handleChange} name='email' value={email} />
        <FormInput labelName='password' type='password' required onChange={handleChange} name='password' value={password} />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={loginMethod}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
