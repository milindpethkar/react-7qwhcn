// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardHeader,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRipple,
//   MDBRow,
//   MDBTooltip,
//   MDBTypography,
//   } from "mdb-react-ui-kit";
//   import React from "react";

//   export default function PaymentMethods() {
//   return (
//   <section className="h-100 gradient-custom">
//     <MDBContainer className="py-5 h-100">
//       <MDBRow className="justify-content-center my-4">
//         <MDBCol md="8">
//           <MDBCard className="mb-4">
//             <MDBCardHeader className="py-3">
//               <MDBTypography tag="h5" className="mb-0">
//                 Cart - 2 items
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBRow>
//                 <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
//                   <MDBRipple rippleTag="div" rippleColor="light"
//                     className="bg-image rounded hover-zoom hover-overlay">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
//                       className="w-100" />
//                     <a href="#!">
//                       <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
//                       </div>
//                     </a>
//                   </MDBRipple>
//                 </MDBCol>

//                 <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
//                   <p>
//                     <strong>Blue denim shirt</strong>
//                   </p>
//                   <p>Color: blue</p>
//                   <p>Size: M</p>

//                   <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
//                     title="Remove item">
//                     <MDBIcon fas icon="trash" />
//                   </MDBTooltip>

//                   <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
//                     title="Move to the wish list">
//                     <MDBIcon fas icon="heart" />
//                   </MDBTooltip>
//                 </MDBCol>
//                 <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
//                   <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                     <MDBBtn className="px-3 me-2">
//                       <MDBIcon fas icon="minus" />
//                     </MDBBtn>

//                     <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

//                     <MDBBtn className="px-3 ms-2">
//                       <MDBIcon fas icon="plus" />
//                     </MDBBtn>
//                   </div>

//                   <p className="text-start text-md-center">
//                     <strong>$17.99</strong>
//                   </p>
//                 </MDBCol>
//               </MDBRow>

//               <hr className="my-4" />

//               <MDBRow>
//                 <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
//                   <MDBRipple rippleTag="div" rippleColor="light"
//                     className="bg-image rounded hover-zoom hover-overlay">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
//                       className="w-100" />
//                     <a href="#!">
//                       <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
//                       </div>
//                     </a>
//                   </MDBRipple>
//                 </MDBCol>

//                 <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
//                   <p>
//                     <strong>Red hoodie</strong>
//                   </p>
//                   <p>Color: red</p>
//                   <p>Size: M</p>

//                   <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
//                     title="Remove item">
//                     <MDBIcon fas icon="trash" />
//                   </MDBTooltip>

//                   <MDBTooltip wrapperProps={{ size: "sm" , color: "danger" }} wrapperClass="me-1 mb-2"
//                     title="Move to the wish list">
//                     <MDBIcon fas icon="heart" />
//                   </MDBTooltip>
//                 </MDBCol>
//                 <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
//                   <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                     <MDBBtn className="px-3 me-2">
//                       <MDBIcon fas icon="minus" />
//                     </MDBBtn>

//                     <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

//                     <MDBBtn className="px-3 ms-2">
//                       <MDBIcon fas icon="plus" />
//                     </MDBBtn>
//                   </div>

//                   <p className="text-start text-md-center">
//                     <strong>$17.99</strong>
//                   </p>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>

//           <MDBCard className="mb-4">
//             <MDBCardBody>
//               <p>
//                 <strong>Expected shipping delivery</strong>
//               </p>
//               <p className="mb-0">12.10.2020 - 14.10.2020</p>
//             </MDBCardBody>
//           </MDBCard>

//           <MDBCard className="mb-4 mb-lg-0">
//             <MDBCardBody>
//               <p>
//                 <strong>We accept</strong>
//               </p>
//               <MDBCardImage className="me-2" width="45px"
//                 src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
//                 alt="Visa" />
//               <MDBCardImage className="me-2" width="45px"
//                 src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
//                 alt="American Express" />
//               <MDBCardImage className="me-2" width="45px"
//                 src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
//                 alt="Mastercard" />
//               <MDBCardImage className="me-2" width="45px"
//                 src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
//                 alt="PayPal acceptance mark" />
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//         <MDBCol md="4">
//           <MDBCard className="mb-4">
//             <MDBCardHeader>
//               <MDBTypography tag="h5" className="mb-0">
//                 Summary
//               </MDBTypography>
//             </MDBCardHeader>
//             <MDBCardBody>
//               <MDBListGroup flush>
//                 <MDBListGroupItem
//                   className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                   Products
//                   <span>$53.98</span>
//                 </MDBListGroupItem>
//                 <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
//                   Shipping
//                   <span>Gratis</span>
//                 </MDBListGroupItem>
//                 <MDBListGroupItem
//                   className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                   <div>
//                     <strong>Total amount</strong>
//                     <strong>
//                       <p className="mb-0">(including VAT)</p>
//                     </strong>
//                   </div>
//                   <span>
//                     <strong>$53.98</strong>
//                   </span>
//                 </MDBListGroupItem>
//               </MDBListGroup>

//               <MDBBtn block size="lg">
//                 Go to checkout
//               </MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   </section>
//   );
//   }

import React from 'react';
import { useContext } from 'react';
import Products from './Products';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import AddJust from './Components/AddJust';

export default function Cart(props, { HandleSubmit }) {
  const person = {
    name: 'totalItems',
  };

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const { totalItems } = useCart();

  const buttonClickHandler = () => {
    props.passData(person);
  };
  // const handleSubmit=()=>{

  //  if ( totalUniqueItems >= 3){
  //     return ()
  //   }
  // }
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div className="grid justify-center item-center text-center">
      {items.map((item, id) => (
        <div>
          <div
            key={id}
            className="border border-white rounded-sm justify-center item-center bg-white p-3"
          >
            {/* <div className="border border-gray-600 p-5 rounded-sm shadow-lg">
              <div className="text-center flex gap-5 sm:w-24  ">
                <img className="w-24 h-24 rounded-sm sm:w-16 h-10" src={item.url} />
                <div className='sm:w-14'>
                  <h1 className="text-xs text-white bg-blue-300 h-5 rounded-sm p-1  ">
                    first pizza
                  </h1>
                  {item.name}
                  <h1 className="text-xs ">{item.price}</h1>

                  <h1 className="text-xs ">your first pizaa</h1>
                  <div className="sand flex gap-1 h-10 ">
                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <div>
                      <h1> {item.quantity}</h1>
                    </div>
                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>

                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
            <div></div>
            <div className="border border-gray-600 p-5 rounded-sm shadow-lg">
              <div className="text-center flex  gap-5 ">
                <img className="w-24 h-24 rounded-sm" src={item.url} />

                <div className="sm:w-14">
                  <h1 className="text-xs text-white bg-blue-300 h-5 rounded-sm p-1">
                    second pizza
                  </h1>
                  {item.name}
                  <h1 className="text-xs ">{item.price}</h1>

                  <h1 className="text-xs ">your second pizaa</h1>
                  <div className="sand flex gap-1 h-10 ">
                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    {item.quantity}

                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>

                    <button
                      className="h-10  text-white bg-blue-700 w-10  rounded-sm text-center"
                      onClick={() => removeItem(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        {' '}
        <h1>
          Cart total:
          {items.reduce(
            (total = 0, item) => total + item.quantity * item.price,
            0
          )}
        </h1>
        <h5 onChange={buttonClickHandler}>Total:{totalItems}</h5>
        <Link to="/form">
          <button className="h-10  text-white bg-blue-700 w-48  my-5 rounded-sm text-center relative left-48 sm:w-24 ">
            Add to cart
          </button>
        </Link>
      </div>
    </div>
  );
}
