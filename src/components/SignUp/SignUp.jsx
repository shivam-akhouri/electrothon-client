import React from "react";
import Tilt from "react-parallax-tilt";
import "../../../src/App.css";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {
  const [formValue, setformValue] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async() => {
    // store the states in the form data
    const loginFormData = new FormData();
    loginFormData.append("username", formValue.email)
    loginFormData.append("password", formValue.password)
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "/api/login",
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App  bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-600 hover:to-green-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-3xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="h-full flex flex-col justify-evenly items-center"
          >
            <div className="p-2 text-white font-poppins text-2xl tracking-widest">
              Sign Up
            </div>
            <input
              className="p-2"
              type="email"
              placeholder="e-mail"
              name="email"
              className="input-text p-1"
              value={formValue.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
             
              name="password"
    
        value={formValue.password}
        onChange={handleChange}
      className= "input-text p-1 mb-4 "/>

            <Link to="/">
              <input
                type="Submit"
                className="animate-bounce cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
              ></input>
            </Link>
            
          <h1 className=" text-xl  text-white">Already have an account?</h1>
          {/*the button used for sign in/signup data*/}
          <button className="mt-4 animate-bounce cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 ">
            <Link to="/SignIn">Sign In</Link>
          </button>
          </form>

        </div>
      </Tilt>
    </div>
  );
}
