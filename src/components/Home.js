import React from 'react';
import Card from './utils/Card';
import sneak from '../assets/sneakers/sneak1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <main className="p-12 bg-[#fef5e6]">
      <div className="home flex flex-col lg:flex-row justify-between items-center max-w-[1700px] mx-auto border-black border-4 p-8 bg-white rounded-md shadow-md">
        <div className="content w-full lg:w-1/2 p-4 lg:p-8">
          <h2 className="title text-4xl lg:text-6xl leading-relaxed font-bold text-black">
            The most <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-red-500">beautiful</span> and <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-red-500">high-quality</span> sneakers <br />
            in the whole world
          </h2>
          <h3 className="subtitle text-xl lg:text-2xl text-gray-600 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora
            expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum
            optio?
          </h3>
          <Link to='/shop'>
            <button className='btn'>
              Explore Now
            </button>
          </Link>
        </div>
        <div className="preview w-full lg:w-1/2 flex justify-center p-4 lg:p-8">
          <Card title='Nike Dunk Low Sesame' price={24864} image={sneak} />
        </div>
      </div>
    </main>
  );
}

export default Home;
