import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.style.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
