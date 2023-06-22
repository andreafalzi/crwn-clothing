// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
// import { CartContext } from '../../contexts/cart.context';
import { addItemToCart, removeItemToCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CheckoutItemContainer } from './checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
  // const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <LeftArrow onClick={() => dispatch(removeItemToCart(cartItems, cartItem))} />
        {quantity}
        <RightArrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))} />
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
