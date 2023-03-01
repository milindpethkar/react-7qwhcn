import React from 'react';
import Cart from './pages/Cart';

const Product = (props, handleClick) => {
  //event listener function for select button

  return (
    <div>
      <div>
        <div
          id="dogy"
          class="h-48 w-56  bg-white leading-32 mx-5 my-32   "
          style={{
            backgroundImage: `url(${props.item.url} )`,
            backgroundSize: 'cover',
            width: '300',
            backgroundPosition: 'center',
          }}
        >
          <div id="find" class="w-56 h-48  ">
            <img class="w-3" src=""></img>
            <div class="text-white flex justify-between relative top-32 ">
              <h1>{props.item.price}</h1>
              <button class="bg-blue-500"> customize</button>
            </div>
          </div>{' '}
          <hr></hr>
          <div>
            <h1>{props.item.name}</h1>
            <h5 class="text-xs">{props.item.value}</h5>
          </div>
          <hr></hr>
          <div class="flex justify-between">
            <div>
              <h1 class="text-xs">
                Size <br />
                <b>{props.item.size}</b>
              </h1>
            </div>
            <div>
              <h1 class="text-xs">
                Curst
                <br />
                <b>New Hand Tossed</b>
              </h1>
            </div>
          </div>
          <div class="place-text-right">
            {/* button having event handler function. This function would add the object into the cart */}
            <button
              onClick={(event) => {
                handleClick();
              }}
              type="button"
              class="btn btn-outline-success"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
