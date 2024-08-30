/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect , useState} from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';

import toast from 'react-hot-toast';

const page = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",

  })
  const[buttonDisabled , setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ()=>{
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user)
      console.log("Login Succesfull ", response.data);
      toast.success("Login success")
      router.push("/profile")
    } catch (error:any) {
      console.log("login failed",error.message);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }

  }
  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
      setButtonDisabled(false);

    }else{
      setButtonDisabled(true);
    
    }
  },[user]);
  return (
    <>
    <div className='mt-10 text-black text-3xl text-center font-semibold'>
     <h1>Login</h1> 
    </div>
    <div className ="bg-gray-600 min-w-5xl mx-96 rounded-md text-center p-4 text-black">
      
      <label htmlFor="email/username"  className='m-2 p-4 text-xl block'> Email / Username</label>
      <input type="text" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} placeholder='email' className='border-b-2 p-1 rounded-xl w-96 ' />
      <label htmlFor="password"  className='m-2 text-xl p-4 block'>Password</label>
      <input type="password" id='password'    value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} placeholder='*********' className='border-b-2 m-2 p-1 rounded-xl w-96 ' /> <br />
      <button onClick={onSubmit} className='border-black p-2 bg-slate-700 m-3 text-white rounded-xl hover:opacity-50'>Login</button>


  

    </div>
    </>
  )
}

export default page
