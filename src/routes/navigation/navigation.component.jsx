import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
// import { UserContext } from '../../contexts/user.context';
import { selectCurrentUser } from '../../store/user/user.selector';
// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUser } from '../../utilities/firebase/firebase.utilities';

// import './navigation.style.jsx';
import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from './navigation.style';

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  //replaced by a Firebase method call onAuthStateChanged
  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   console.log(res);
  //   setCurrentUser(null);
  // };
  return (
    // Bacause in React we must have a parent div all the time, we can use 'Fragment' to overwrite this rule and trick React to think that we pass a parent div, but is not going to be rendered in the actual HTML
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinksContainer>
          {currentUser && (
            <div>
              Welcome,
              <strong>
                <em> {currentUser.displayName === null ? 'Guest' : currentUser.displayName}</em>
              </strong>
            </div>
          )}
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' to='/auth' onClick={signOutUser}>
              {/* <NavLink className='nav link' to='/auth' onClick={signOutHandler}> */}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
