import { useContext } from 'react';

import './checkout-item.style.scss';

import { ReactComponent as RightArrow } from '../../assets/rightArrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <LeftArrow onClick={() => removeItemToCart(cartItem)} />
        {quantity}
        <RightArrow onClick={() => addItemToCart(cartItem)} />
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
