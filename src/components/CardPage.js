import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mainSneakers, otherSneakers } from '../data/sneakers';
import ColorPicker from './utils/ColorPicker';
import SizePicker from './utils/SizePicker';
import AmountBtn from './utils/AmountBtn';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const CardPage = () => {
  const dispatch = useDispatch();
  const { title } = useParams();
  const allSneakers = [...mainSneakers, ...otherSneakers];
  const sneaker = allSneakers.find((sneaker) => sneaker.title === title);

  const [amount, setAmount] = useState(1);

  const handleAddToCart = () => {
    dispatch(addItem({ ...sneaker, amount }));
    console.log(sneaker)
    setAmount(1);
  };

  if (!sneaker) {
    return <div>Sneaker not found</div>;
  }

  return (
    <main className="p-12" >
      <div className=" card-page flex max-w-[1200px] mx-auto border-4 border-black p-8 rounded-lg shadow-lg">
        <img src={sneaker.image} alt="sneaker" className="w-1/2 rounded-lg" style={{maxWidth:"30rem"}}/>
        <div className="content w-1/2 pl-8">
          <div className="about mb-6">
            <h2 className="title text-4xl font-bold mb-2">{sneaker.title}</h2>
            <div className="price text-2xl text-gray-800">Rs{sneaker.price}</div>
          </div>
          <div className="description text-gray-600 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum
            explicabo veniam maxime earum sunt praesentium debitis optio eaque deleniti!
            Quia aspernatur minima illo laboriosam.
          </div>
          <ColorPicker />
          <SizePicker />
          <div className="buttons flex items-center mt-4">
            <AmountBtn amount={amount} setAmount={setAmount} />
            <div
              className="cart-btn btn bg-red-500 text-white py-2 px-4 ml-4 rounded-lg flex items-center cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to Cart
              <Arrow className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardPage;
