// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CardDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.style';
import { useSelector } from 'react-redux';

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CardDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CardDropdownContainer>
  );
};

export default CartDropdown;
