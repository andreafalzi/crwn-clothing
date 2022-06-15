import { useState, useContext } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

//replaced by a Firebase method call onAuthStateChanged
// import { UserContext } from '../../contexts/user.context';

import './sign-in-form.style.scss';

const defaultformFields = {
  email: '',
  password: '',
};

const SignInForm = ({ loginMethod }) => {
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
    <div className='sign-in-container'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput labelName='email' type='text' required onChange={handleChange} name='email' value={email} />
        <FormInput labelName='password' type='password' required onChange={handleChange} name='password' value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={loginMethod}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
