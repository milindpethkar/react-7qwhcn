import React from 'react';
import React, { useEffect, useState } from 'react';
import './pages/Style.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="babel0" className="h-full py-10">
      <label>Form</label>
      <div
        id="babel"
        className="w-max h-full border-black border-3 leading-10 p-10 relative left-[400px] rounded-sm shadow-lg bg-white "
      >
        <div className=" py-5 border border-gray-500 p-10 h-full">
          <div className="flex">
            <label typeof="name">First name :</label>
            <input
              className="w-24 h-10 border-black border-3  "
              placeholder="First Name"
              type="text"
              {...register('firstName')}
            /> 
            <label typeof="name">Name :</label>
            <input
              className="w-24 h-10 border-black border-3  "
              placeholder="Name"
              type="text"
              {...register('Name')}
            />

           
          </div><br />
          <div>
            <label typeof="name">City:</label>
            <select className="w-48 h-10 border-black border-3  " type={String}>
              <option>pune</option>
              <option>Mumbai</option>
              <option>Benguluru</option>
              <option>Chennai</option>
            </select><br />
            <br />
            <label typeof="name">Address :</label>
            <input
              className="w-48 h-10 border-black border-3  "
              type={String}
            /><br />
            <br />
            <label typeof="name">Apparment/Area :</label>
            <input className="w-48 h-10 border-black border-3 " type={String} /><br />
            <br />
            <label typeof="name">Email :</label>
            <input
              className="w-48 h-10 border-black border-3 "
              placeholder="Email"
              type="email"
              {...register('email')}
            />
            <br />
           <div>
            <label typeof="name">State :</label>
           
           <select className="w-32 h-10 border-black border-3  " type={String}>
              <option>Delhi</option>
              <option>Maharastra</option>
              <option>Madhya Pradesh</option>
              <option>Goa</option>
            </select>
           </div> 
           
            <label className='pt-5' typeof="name">Number :</label>
            <input
              className="w-48 h-10 border-black border-3 "
              type={Number}
              name="number"
            />
            <br />
            <label className='pt-5' typeof="name">postal Code:</label>
            <input
              className="w-48 h-10 border-black border-3 "
              type="number"
              {...register('age', { min: 18, max: 99 })}
            />
            <br />
           <div>
           <label className='pt-5' typeof="name">Country:</label>
            <select className="w-48 h-10 border-black border-3 " type={String}>
              <option>India</option>
            </select>
           </div>
           

            

           <div>
           <select {...register('gender')}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <br />
           </div>

          
          <div className='pt-10'>
          <button
              className="w-32 h-18 border-white border-3 text-white  bg-blue-700 relative left-48 hover:active:bg-white  shadow-lg float-right "
              onSubmit={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
