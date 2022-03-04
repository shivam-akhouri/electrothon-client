//  bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-400 hover:to-blue-500
import React from 'react'
import Tilt from 'react-parallax-tilt';
import '../../App.css'
import '../../index.css'
import React from 'react'



export default HomePage

import { Link } from "react-router-dom";

export default function HomePage() {


  return (
   <>

 

     <div className=" flex flex-col App  bg-gradient-to-r from-green-300 to-blue-700 hover:from-green-400 hover:to-blue-500   h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
    <div className=" h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
    <Tilt >
      <div className=" animate-bounce-slowl flex flex-row justify-center align-center duration-150 container h-[32rem] w-[64rem] bg-white bg-opacity-10 rounded-3xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <div className='mx-4 flex flex-col items-center'>
        <h1 className='mt-8 p-1 text-black text-3xl font-bold'>Welcome to Pharma-Secure! </h1>
        <h2 className="pt-2 text-black font-bold text-xl" > Pharma secure is a block chain based, that product authentication and consumer engagement website that helps in analyzing counterfeit medicines.  Our aim is to ensure that the medicines we buy at our </h2>
        <h1 className=" text-black font-bold text-xl">local pharmacies are genuine products and not counterfeit ones.</h1>
        <h1 className='mt-8 p-1 text-black text-3xl font-bold'>If you're a company </h1>
        </div>
        </div>
       
        
   
    </Tilt>
    <div className='mt-4 flex flex-row justify-around  w-screen'>
    <button className='mt-8 animate-bounce cursor-pointer font-poppins rounded-full px-8 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-90 '><Link to="/SignUp">Register</Link></button>
    <button className='mt-8 animate-bounce cursor-pointer font-poppins rounded-full px-8 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-90 '><Link to="/SignIn">Sign In!</Link></button>
    </div>
  </div> 
 
      
    </>
  )
}

