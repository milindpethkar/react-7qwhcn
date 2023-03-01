import React from 'react';
import { Link } from 'react-router-dom';
import { Duplicate } from './Duplicate';

const Down = () => {
  return (
    <div className='w-full md:w-full lg:w-full'>
      <div class="bg-blue-500 text-white relative top-48 px-10 ">
        <div>
          <img src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg"></img>
          <div class="flex  justify-between place-content-right">
            <div class="flex pt-1 grid content-center lg:space-x-5">
              <Link to="/About">Disclaimer</Link>
              <Link to="#">Feedback</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Conditions</Link>
            </div>
            <div class="">
              <h1>
                <Link to="#">DOWNLOAD APP</Link>
              </h1>
              <button class="w-32">
                <img src="https://pizzaonline.dominos.co.in/static/assets/play_store@2x.png"></img>
              </button>
              <button class="w-32">
                <img src="https://pizzaonline.dominos.co.in/static/assets/app_store@2x.png"></img>
              </button>
            </div>
          </div>
          <ul class="text-center  leading-7 w-full">
            <h1>All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</h1>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Down;
