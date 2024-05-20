import Image from "next/image";
import React from "react";

import banner from "../../resources/banner3.png";
import banner1 from "../../resources/banner1.webp";
import banner2 from "../../resources/banner2.webp";
import banner3 from "../../resources/banner3.webp";

export default function Banner() {
  return (
    <div className="md:flex">
      <div className="md:w-3/4">
        <Image src={banner1} alt="banner " className="w-full"></Image>
      </div>
      <div className="md:ml-6 mt-0 sm:m-5 ">
        <div className="bg-violet-400 p-12 h-full  ">
          <h2 className="lg:mt-11 mt-auto font-bold text-2xl pb-4 text-center ">
            Compare Products
          </h2>
          <p className=" mb-4 text-center">Chose two products to compare</p>
          <label className="input mb-6 rounded-none input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <label className="input rounded-none input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn btn-wide rounded-none mt-4 btn-outline">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
}
