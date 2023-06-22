// import { createContext, useReducer } from 'react';

// import { createAction } from '../utilities/reducer/reducer.utilities';

// Migrate to Redux
// const addCartItem = (cartItems, productToAdd) => {
//   //find if cartItems contains productToAdd
//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
//   //If found, increment quantity
//   if (existingCartItem) {
//     return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
//   }
//   //return new array with modified cartItems/ new cart item
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   //find the cart item to remove
//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
//   //check if quantity is equal 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }
//   //return back cartItems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };

// Migration to Redux
// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemToCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// create a Reducer function

// Migration to Redux
// export const CART_ACTION_TYPE = {
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
// };

// Migration to Redux

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPE.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };

//     case CART_ACTION_TYPE.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };

//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// Migration to Redux

// export const CartProvider = ({ children }) => {
//   //replaced by useReducer
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   // const [cartItems, setCartItems] = useState([]);
//   // const [cartCount, setCartCount] = useState(0);
//   // const [cartTotal, setCartTotal] = useState(0);

//   //useReducer code start

//   const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(
//     cartReducer,
//     INITIAL_STATE
//   );

// const { isCartOpen, cartItems, cartCount, cartTotal } = state;

// const setIsCartOpen = (isCartOpen) => {
//   dispatch(createAction(CART_ACTION_TYPE.SET_IS_OPEN_CART, isCartOpen));
// };
// const setCartItems = (cartItems) => {
//   dispatch(createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems));
// };
// const setCartCount = (cartCount) => {
//   dispatch(createAction(CART_ACTION_TYPE.SET_CART_COUNT, cartCount));
// };
// const setCartTotal = (cartTotal) => {
//   dispatch(createAction(CART_ACTION_TYPE.SET_CART_TOTAL, cartTotal));
// };

// useEffect(() => {
//   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
//   setCartCount(newCartCount);
// }, [cartItems]);

// useEffect(() => {
//   const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
//   setCartTotal(newCartTotal);
// }, [cartItems]);

//Process to remove useState

// Migrate to Redux
// const updateCartItemsReducer = (newCartItems) => {
//   const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

//   const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

//   dispatch(
//     createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
//       cartItems: newCartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal,
//     })
//   );
// };
//useReducer code end

// Migrate to Redux
// const addItemToCart = (productToAdd) => {
//   //Process to remove useState
//   // setCartItems(addCartItem(cartItems, productToAdd));
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   updateCartItemsReducer(newCartItems);
// };

// const removeItemToCart = (cartItemToRemove) => {
//   //Process to remove useState
//   // setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   updateCartItemsReducer(newCartItems);
// };
// const clearItemFromCart = (cartItemToClear) => {
//   //Process to remove useState
//   // setCartItems(clearCartItem(cartItems, cartItemToClear));
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   updateCartItemsReducer(newCartItems);
// };

// Migrate to Redux

// const setIsCartOpen = (bool) => {
//   dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
// };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     cartCount,
//     removeItemToCart,
//     clearItemFromCart,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
