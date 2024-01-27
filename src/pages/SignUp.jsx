import React, { useState } from "react";
// import {Link} from 'react-router-dom';
import { supabase } from "./client";
import './styles.css';
import front from './front.jpg';
import {MdOutlineKeyboardArrowLeft } from 'react-icons/md';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      setResponseMessage("Check your email for a verification link");
    } catch (error) {
      setResponseMessage(error.message);
    }
  };

  return (
    <div className="signup">
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 left">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className=" h-10 w-auto"
          src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg"
          alt="Your Company"
          />
        <h1 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">

          Sign up 
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignup} className="space-y-6" method="POST">
          <div>
            <label htmlFor="first-name">First Name</label>
            <div className="mt-2">

            <input type="text" name='name' required  
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            <label htmlFor="last-name">Last Name</label>
            <div className="mt-2">

            <input type="text" name='lname' required  
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
                onChange={(e) => setEmail(e.target.value)}
              />
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
                onChange={(e) => setPassword(e.target.value)}
              />
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
                name="cpassword"
                type="password"
               
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              
               <input type="checkbox"/><span>Remember Me</span>
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
              <a href="/login">Sign In</a>
              
            </div>
            
          </div>
        </form>
        <p>{responseMessage}</p>
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
  );
};

export default SignUp;
