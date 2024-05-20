import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className=" md:my-10  py-10 pt-5">
      <h3 className="text-4xl text-center my-8"><span className="">----S</span>ERVICES----</h3>
      <div className="  grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
        <Link className=" " href="/">
          {" "}
          <div className="  card col-auto md:w-96 w-80 bg-base-100 ">
            <div className="relative card-body overflow-hidden">
              <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>

              <div className="absolute  -top-10 -left-10   rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>
              <div className="z-20">
                <h2 className="card-title">Latest Laptops</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-primary">
                  Take a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link className=" " href="/">
          {" "}
          <div className="  card col-auto md:w-96 w-80 bg-base-100 ">
            <div className="relative card-body overflow-hidden">
              <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>
              <div className="absolute  -top-10 -left-10  rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>
              <div className="z-20">
                <h2 className="card-title">Servicing</h2>
                <p>We provide best Services all over bangladesh with home delivery</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-primary">
                    Take a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link className=" " href="/">
          {" "}
          <div className="  card col-auto md:w-96 w-80 bg-base-100 ">
            <div className="relative card-body overflow-hidden">
              <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>
              <div className="absolute  -top-10 -left-10  rounded-full bg-blue-300 w-24 h-24 ">
                {" "}
              </div>
              <div className="z-20">
                <h2 className="card-title">Best Support</h2>
                <p>We provide special online and offline support 24/7</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-primary">
                    Take a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
