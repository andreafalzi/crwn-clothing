import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  //Course Idea

  //Personal Idea
  // const itemsQuantity = cartItems.map((e) => {
  //   return e.quantity;
  // });

  // const itemCounts = itemsQuantity.reduce((prevValue, currentValue) => prevValue + currentValue);

  const handleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={handleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      {/* <span className='item-count'>{itemCounts}</span> */}
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
