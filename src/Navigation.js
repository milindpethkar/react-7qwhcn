import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Form17 from './Form'

function  Navigation  () {
  const { totalUniqueItems} =
  useCart();
  return (
    <div className=''>
      <nav className=" bg-blue-700 ">
       <div> 
         <ul className="flex h-12  md:justify-between lg:justify-between ">
          <li>
            <Link to='/Products'>
              <img src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg"></img>
            </Link>
          </li>
         <div className='flex gap-10 py-1'> 
          <li> 
            <Link to="/Form" className='text-white px-5'>
              <button>
            
            <div  class="w-24 h-10 py-1.7 border border-white text-l font-bold text-center text-white bg-green-700 rounded-sm focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:text-lg">
              Log in
           </div>
               
              </button>
            </Link></li>
         
          
           <li> <Link to="/Cart">
              <div className="flex hover:bg-green-500">
                <span className="text-white rounded-full w-5 h-5 bg-red-700 text-center p-">{totalUniqueItems}</span>
                <img className="w-5 text-white " src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png" />
              </div>
            </Link>
          </li>
          </div>
        </ul></div>
      </nav>
    </div>
  );
};

export default Navigation;
