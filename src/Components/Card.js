import React from 'react';
import Product from './Product';
import Cart from './Cart';
import { UseContext } from '../UseContext';
import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const data = [
  {
    id: '1',
    url: 'https://images.dominos.co.in/updated_kadhai_paneer.jpg',
    name: 'Kadhai Paneer',
    price: ' 439',
    value:
      'Paneer chunks in your favourite spicy kadhai masala flavors, with toppings of onion & capsicum',
    size: 'Size:Medium',
    quantity: '',
  },
  {
    id: '2',
    url: 'https://images.dominos.co.in/IndianTandooriPaneer.jpg',
    name: 'Indi Tandoori Paneer',
    price: ' 439',
    value:
      'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo',
    size: 'Medium',
    quantity: '',
  },
  {
    id: '3',
    url: 'https://images.dominos.co.in/updated_paneer_makhani.jpg',
    name: 'Paneer Makhani',
    price: ' 439',
    value:
      'Flavorful twist of spicy makhani sauce topped with paneer & capsicum',
    size: 'Medium',
    quantity: '',
  },
  {
    id: '4',
    url: 'https://images.dominos.co.in/new_deluxe_veggie.jpg',
    name: 'Deluxe Veggie',
    price: '439',
    value: 'Veg delight - onion, capsicum, grilled mushroom, corn & paneer',
    size: 'Medium',
    quantity: '',
  },
  {
    id: '5',
    url: 'https://images.dominos.co.in/PIZ0167.jpg',
    name: 'The Unthinkable Pizza',
    price: '439',
    value:
      'loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!',
    size: 'Medium',
    quantity: '',
  },
];

const Products = ({ handleSubmit }) => {
  const {
    isEmpty,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const { addItem } = useCart();

  
  return (
    <div>
      <div className=" grid justify-center items-center md:grid-cols-3 lg:grid-cols-3  hover:scroll-auto">
        {data.map((item, id) => (
          <div
            className="bg-white rounded-lg shadow-lg  mx-5 my-10 w-56 h-80 "
            key={id}
          >
            <div
              id="dogy"
              class="  h-24  bg-white leading-32 bg-white   "
              style={{
                backgroundImage: `url(${item.url} )`,
                backgroundSize: 'cover',
                width: '300',
                backgroundPosition: 'center',
              }}
            >
              <div id="find" class="w-56 py-10   ">
                <img className="w-3" src=""></img>
                <div className="text-white flex justify-between relative ">
                  <h1 className="bg-gray-700">{item.price}</h1>
                  <button className="bg-blue-500"> customize</button>
                </div>
              </div>{' '}
            </div>
            <hr></hr>
            <div className="p-3">
              <div>
                <h1>{item.name}</h1>
                <h5 className="text-xs  ">{item.value}</h5>
              </div>
              <hr></hr>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-xs">
                    Size <br />
                    <b>{item.size}</b>
                  </h1>
                </div>
                <div className="textalign-center">
                  <h1 className="text-xs">
                    Curst
                    <span>
                      <br />
                      <select className="bg-white w-10">
                        {/* <div className="bg-white h-24 "> */}
                          <option>
                            <b></b>
                          </option>
                          <option>
                            <b>New Hand Tossed</b>
                          </option>
                          <br />
                          <option>
                            <b>100% Wheat Thin Crust</b>
                          </option>
                          <br />
                          <option>
                            <b>Cheese Burst</b>
                          </option>
                          <br />
                          <option>
                            <b>Fresh Pan Pizza</b>
                          </option>
                        {/* </div> */}
                      </select>
                    </span>
                  </h1>
                </div>
               
              </div>
              <button
                type="button"
                className=" h-10 border border-green-500 bg-white text-green-500 w-24 float-right my-5 text-center">
                <div className="w-24 text-center "onClick={() => addItem(item)}>select</div>
               </button>
             
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Products;
