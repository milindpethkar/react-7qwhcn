// import logo from './logo.svg';

import Home from './pages/Home';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import About from './pages/About';
import Navigation from './Navigation ';
import Cart from './Cart';
import Products from './Components/Card';
import Down from './Components/Down';
import createContext from 'react';
import { CartProvider } from 'react-use-cart';
import Form from './Form';
import AddJust from './Components/AddJust'
import { useCart } from 'react-use-cart';

//
function App() {
  const { totalUniqueItems} =
  useCart();
  const [count, setCount] = useState({ name: 'unknown' });
  const passData = (data) => {
    setCount(data);
  };

  const [value, setValue] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  
  

  
  if (totalUniqueItems > 3) return <p>Your cart is empty</p>;
  return (
    <>
      <BrowserRouter>
        <div></div>

        <CartProvider>
          <Navigation />
          <div className="bg-gray-300 flex justify-between  ">
            <Routes>
              <Route path="/products" element={<Products />} />

              <Route path="/Cart" element={<Cart passData={passData} />} />
              <Route path="/form" element={<Form />} />
            </Routes>
           <div className='w-0 invisible md:visible md:w-1/2'> <Cart/></div>
          </div>
        </CartProvider>

        <Down />
      </BrowserRouter>
    </>
  );

}

export default App;
