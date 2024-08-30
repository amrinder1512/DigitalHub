/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success('Logout successful');
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error: any) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to get user details");
    }
  };

  return (
    <>
      <div className='block text-black text-center mt-10 items-center justify-center'>
        Hi.. user
        <h1 className='p-3 bg-slate-400  m-3 rounded mx-96'>
          {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>View Profile</Link>} {data}
        </h1>
        <button onClick={logout} className='text-center text-white bg-blue-700 p-3 rounded-md m-2 absolute right-2'>
          Logout
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <button onClick={getUserDetails} className='text-center text-white bg-green-700 p-3 rounded-md m-4'>
          Get User Details
        </button>
      </div>
    </>
  );
}

export default Page;
