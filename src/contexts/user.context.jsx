import { createContext, useState, useEffect } from 'react';
import { signOutUser, onAuthStateChangedListener, createUserDocumentFromAuth } from '../utilities/firebase/firebase.utilities';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //sign out the user
  // signOutUser();

  //onAuthStateChanged is a methode that firebase provide that keep track of every time that auth change. First we have created this onAuthStateChangedListener() and we are passing it inside a useEffect that mount only one time as the page refresh.
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
