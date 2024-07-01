import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCart, closeCart } from '../redux/cartSlice';
import Nav from './utils/Nav';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { ReactComponent as Magnify } from '../assets/magnify.svg';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);

  const toggleCart = () => {
    if (cartStatus) {
      dispatch(closeCart());
    } else {
      dispatch(openCart());
    }
  };

  const computeItemsAmount = () => {
    return cartItems.reduce((currentAmount, item) => currentAmount + item.amount, 0);
  };

  return (
    <header className="px-3rem py-1rem flex justify-between items-center">
      <div className="container cr flex items-center">
        <Logo className="icon -translate-y-3px cursor-pointer" />
        <h1 className="title text-1.7rem">SneakShop</h1>
      </div>
      <Nav />
      <div className="container cr flex items-center gap-x-4">
        <div className="cart-icon relative cursor-pointer mr-4" onClick={toggleCart}>
          <Cart className="icon" />
          <div className="cart-amount absolute top-[-7px] right-[-17px] w-6 h-6 rounded-full bg-orange flex justify-center items-center text-white font-bold">{computeItemsAmount()}</div>
        </div>
        <Magnify className="icon cursor-pointer mr-4" />
        <button className="btn">Log in</button>
      </div>
    </header>
  );
};

export default Header;
