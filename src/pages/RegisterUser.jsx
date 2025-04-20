import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/authService";


const RegisterUser = () => {

  const {register, handleSubmit} = useForm()
  const navigator = useNavigate()
  const [err, setError] = useState("")
  
  const onSubmit = async (data) => {
      try {
        const res = await registerUser(data);
        navigator("/");
      } catch (err) {
        setError(err.data);
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign Up User
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
            {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Peter Parker"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
            {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
            {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
