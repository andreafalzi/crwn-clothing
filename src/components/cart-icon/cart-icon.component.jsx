import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.style.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);
  //Course Idea

  //Personal Idea
  // const itemsQuantity = cartItems.map((e) => {
  //   return e.quantity;
  // });

  // const itemCounts = itemsQuantity.reduce((prevValue, currentValue) => prevValue + currentValue);

  const handleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={handleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      {/* <span className='item-count'>{itemCounts}</span> */}
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
