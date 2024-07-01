import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart, clearCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.cart);

  const computeTotal = () => {
    return items.reduce(
      (currentPrice, item) => currentPrice + item.price * item.amount,
      0
    );
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Cart is empty!');
    } else {
      dispatch(clearCart());
      toast.success('Order placed successfully!');
    }
  };

  return (
    <>
      <div
        className={`overlay ${status ? 'active' : ''}`}
        onClick={() => dispatch(closeCart())}
      ></div>
      <div className={`cart ${status ? 'active' : ''}`}>
        <div className='close-btn' onClick={() => dispatch(closeCart())}></div>
        <div className='title'>Cart</div>
        <div className='items'>
          {items.map((item, index) => {
            const { title, price, image, amount } = item;

            return (
              <div key={index} className='item'>
                <div className='image'>
                  <img src={image} alt={title} />
                  <div className='amount'>{amount}</div>
                </div>
                <div className='info'>
                  <div className='item-title'>{title}</div>
                  <div className='price'>Rs {price}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='total'>
          <div className='total-title'>Total:</div>
          <div className='total-price'>Rs {computeTotal()}</div>
        </div>
        <div className='checkout-btn btn' onClick={handleCheckout}>checkout</div>
      </div>
    </>
  );
};

export default Cart;
