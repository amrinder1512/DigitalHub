"use client" ;

import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';



const Signup = () => {
  const router = useRouter();
  const [ user , setUser] = useState({
    username:"", 
    email: "",
    password:''

  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    try {
      setIsSubmitting(true); // Set submitting state

      const res = await axios.post("http://localhost:3000/api/sign-up", user);
      console.log(res.data);
      // setResponse(res.data);
      Swal.fire({
        icon: 'success',
        title: 'Successfully Added',
        showConfirmButton: true,
      });
      setUser({
        username: "",
        email: "",
        password:"",
      
      });
    } catch (error) {
      console.error("Error posting data", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };







  return (<>
   
    <div className='flex  justify-center text-center text-2xl font-bold mt-20 text-black my-4 ~'>
    <h1>Register Yourself</h1>
    </div>
    <div className=' p-4 text-black  text-center' >
      <div className='p-4 mx-96 bg-gray-300 rounded-md' >
        <form onSubmit={handleSubmit} >
          <label htmlFor="username" className='m-2 text-xl block'> Username</label> 
          <input type="text"  value={user.username} onChange={(e)=> setUser({...user , username: e.target.value})} className='border-b-2 m-2 p-1 rounded-xl w-96 '/> <br />
          <label htmlFor="email" className='m-2 text-xl'>Email Address</label> <br />
          <input type="text"  value={user.email} onChange={(e)=> setUser({...user , email: e.target.value})} className='border-b-2 m-2 p-1 rounded-xl w-96' /> <br />
          <label htmlFor="password" className='m-2 text-xl'>Password</label> <br />
          <input type="password" name="" id="" value={user.password} onChange={(e)=> setUser({...user , password: e.target.value})} className='border-b-2 m-2 p-1 rounded-xl w-96'/> <br />
          <button type='submit' className=' border-black p-2 bg-slate-700 m-3 text-white rounded-xl hover:opacity-50'>Submit</button>
        </form>

      </div>
    </div>
    </>
  )
}

export default Signup
