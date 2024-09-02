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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Hi, User!</h1>
          <p className="text-lg mb-4">
            {data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`} className="text-blue-600 underline">View Profile</Link>} 
          </p>
          <p className="text-gray-600">{data}</p>
          <button 
            onClick={logout} 
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>

        <button 
          onClick={getUserDetails} 
          className="mt-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Get User Details
        </button>
      </div>
    </>
  );
}

export default Page;
