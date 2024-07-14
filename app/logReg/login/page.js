"use client"
import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGoogle, FaGithub, FaKey } from "react-icons/fa";

import { useForm } from "react-hook-form";
import auth from "@/firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation'


export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);
const onSubmit = async (data, event) => {
  event.preventDefault();
  try {
    await signInWithEmailAndPassword(data.email, data.password);
    router.push('/'); // Redirect to home page on successful sign-in
  } catch (error) {
    console.error('Error signing in:', error);
  }
};
// useEffect(() => {
//   if (user) {
//     router.push('/'); // Redirect to home page if user is authenticated
//   }
// }, [user, router]);
  return (
    <div>
      <div className="py-5 px-8 my-10">
        <h1 className="text-2xl font-bold text-blue-900">
          Sign in to Account
        </h1>
        <div className=" mx-auto my-2 w-12 bg-white border-2 border-blue-900 rounded-md "></div>
        <div className="flex justify-center">
          <RiFacebookCircleLine className="mx-2 border-1 p-2  text-4xl hover:shadow-xl hover:cursor-pointer text-gray-700 shadow-lg  rounded-full " />
          <FaGoogle className="mx-2 border-1 p-2  text-4xl hover:shadow-xl hover:cursor-pointer text-gray-700 shadow-md rounded-full " />
          <FaGithub className="mx-2 border-1 p-2  text-4xl hover:shadow-xl hover:cursor-pointer text-gray-700 shadow-md rounded-full " />
        </div>
        <p className='text-red-600'>{error?.message.split(":")[1]}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-5 flex flex-col gap-4 mt-10 mb-2">
            <label class="input input-bordered flex items-center gap-2">
              <MdEmail className="text-gray-600" />
              <input type="text" class="grow" placeholder="Email"  {...register("email")} required />
            </label>

            <label class="input input-bordered flex items-center gap-2">
              <FaKey className="text-gray-600" />
              <input
                type="password"
                className="focus:outline-none"
                placeholder="Password"
                {...register("password")} 
                required
              />
            </label>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-between">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mx-3">Remember me</span>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox rounded-sm w-4 h-4"
                   
                  />
                </label>
              </div>
              <div> Forgot Password?</div>
            </div>
          </div>
          <div className="my-5">
            <input
            type="submit"
              value={"Sign In"}
              className="btn btn-outline btn-neutral px-16 font-bold rounded-3xl"
            />
              
          </div>
        </form>
      </div>
    </div>
  );
}
 