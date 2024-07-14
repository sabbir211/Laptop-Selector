"use client";

import React from "react";
import logo from "../resources/web5.png";
import Image from "next/image";
import Link from "next/link";
import userDummyImage from "../resources/userAlt.webp";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase.init";
import { signOut } from "firebase/auth";
export default function Navbar() {
  const [user, loading, error ]= useAuthState(auth);
  if (loading) {
    return <p className="absolute top-50 bottom-40">loading....</p>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-100">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <div className="w-32 md:w-44 text-xl">
                <Image src={logo} className=" rounded-sm  " alt="logo"></Image>
              </div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-xl">
                {/* Navbar menu content here */}
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>Services</Link>
                </li>
                <li>
                  <Link href={"/"}>Laptops</Link>
                </li>
                <li>
                  <Link href={"/"}>Offers</Link>
                </li>
                <li>
                  <Link href={"/"}>Hot Deals</Link>
                </li>
              </ul>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full text-center">
                    {/* <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    /> */}
                    <Image src={userDummyImage} alt="User image"></Image>
                    {/* <FaUser className="text-center text-2xl  "> </FaUser> */}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    {user ? (
                      <a onClick={() => signOut(auth)}>Logout</a>
                    ) : (
                      <>
                        <Link href="/logReg"> Sign in </Link>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}

          {/* <Banner></Banner> */}
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white">
            {/* Sidebar content here */}
            <Image src={logo} className="w-48" alt="logo"></Image>

            <ul className="menu menu-horizontal text-xl grid grid-cols-1">
              {/* Navbar menu content here */}
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>Laptops</Link>
              </li>
              <li>
                <Link href={"/"}>Offers</Link>
              </li>
              <li>
                <Link href={"/"}>Hot Deals</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      {/* <div className="navbar bg-base-100 my-0">
        <div className="flex-1">
          <div className="w-44 text-xl">
            <Image src={logo} className=" rounded-sm  " alt="logo"></Image>
          </div>
        </div>
        
      </div> */}
    </div>
  );
}
