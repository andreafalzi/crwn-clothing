import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.style';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  //Course Idea

  //Personal Idea
  // const itemsQuantity = cartItems.map((e) => {
  //   return e.quantity;
  // });

  // const itemCounts = itemsQuantity.reduce((prevValue, currentValue) => prevValue + currentValue);

  const handleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={handleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      {/* <span className='item-count'>{itemCounts}</span> */}
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
