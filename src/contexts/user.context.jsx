import { createContext, useEffect, useReducer } from 'react';

import { createAction } from '../utilities/reducer/reducer.utilities';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utilities/firebase/firebase.utilities';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//create a reducer function

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  //replaced by reducer
  //const [currentUser, setCurrentUser] = useState(null);

  // useReducer code start
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };

  // useReducer code end

  const value = { currentUser, setCurrentUser };

  //sign out the user
  // signOutUser();

  //onAuthStateChanged is a method that firebase provide that keep track of every time that auth change. First we have created this onAuthStateChangedListener() and we are passing it inside a useEffect that mount only one time as the page refresh.

  //Migrating useContext to Redux
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });

  //   return unsubscribe;
  // }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
