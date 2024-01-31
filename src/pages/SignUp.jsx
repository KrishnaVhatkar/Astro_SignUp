import React, { useState } from "react";
// import {Link} from 'react-router-dom';
import { supabase } from "./client";
import './styles.css';
import front from './front.jpg';
import { userSchema } from '../validations/UserValidations';
import {MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Login from "./Login";
import Home from "./Home";


const SignUp = () => {
  const initialValues = {
    name: "",
    lname:"",
    email: "",
    password: "",
    confirm_password: "",
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: (values) => {

      console.log(values);
    }
  });


 

  return (
    // <BrowserRouter>
    <div className="signup">
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 left">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className=" h-10 w-auto"
          src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg"
          alt="Company Logo"
          />
        <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">

          Sign up 
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div>
            <label htmlFor="first-name">First Name</label>
            <div className="mt-2">

            <input type="text" name='name' required  
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.name} onChange={handleChange} onBlur={handleBlur}/>
            {errors.name && touched.name ? <p style={{ 'color': "red" }}>{errors.name}</p> : null}

            </div>
            <label htmlFor="last-name">Last Name</label>
            <div className="mt-2">

            <input type="text" name='lname' required  
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={values.lname} onChange={handleChange} onBlur={handleBlur}/>
            {errors.lname && touched.lname ? <p style={{ 'color': "red" }}>{errors.lname}</p> : null}

            </div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.email} onChange={handleChange} onBlur={handleBlur} 
              />
               {errors.email && touched.email ? <p style={{ 'color': "red" }}>{errors.email}</p> : null} 
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.password} onChange={handleChange} onBlur={handleBlur}
              />
              {errors.password && touched.password ? <p style={{ 'color': "red" }}>{errors.password}</p> : null} 

            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="cpassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="cpassword"
                name="confirm_password"
                type="password"
               
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? <p style={{ 'color': "red" }}>{errors.confirm_password}</p> : null}

            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div id='checkbox'>

               <input id='check-box' type="checkbox"/><span id='remember'>Remember Me</span>
              </div>
               <div className="div">

              <a href="#">Forgot Password?</a>
               </div>
            </div>
            
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-3.5 text-md font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 btn"
            >
              Sign up
            </button>
          </div>
          <div >
            <div className="flex items-center justify-center">
              
              
              Have an account?
              <a href="#">Sign In</a>
              {/* <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
              </Routes> */}
            </div>
            
          </div>
        </form>
      
      </div>
    </div>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 right">
      <a id='back-btn' href='/'>
      <MdOutlineKeyboardArrowLeft/><span>Back to Home</span>
      </a>
      <div className='front-img ' >
        <img className='w-full h-auto'  src='https://img.freepik.com/free-vector/statistic-set-elements-dashboard-template_52683-24173.jpg?size=626&ext=jpg&ga=GA1.2.1757704765.1683653234&semt=ais' alt="" />
        </div>
    
      
    
    </div>
    </div>
    // </BrowserRouter>

  );
};

export default SignUp;
