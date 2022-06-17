import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utilities/firebase/firebase.utilities';

import './navigation.style.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  //replaced by a Firebase method call onAuthStateChanged
  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   console.log(res);
  //   setCurrentUser(null);
  // };
  return (
    // Bacause in React we must have a parent div all the time, we can use 'Fragment' to overwrite this rule and trick React to think that we pass a parent div, but is not going to be rendered in the actual HTML
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <Link className='nav link' to='/auth' onClick={signOutUser}>
              {/* <Link className='nav link' to='/auth' onClick={signOutHandler}> */}
              SIGN OUT
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
