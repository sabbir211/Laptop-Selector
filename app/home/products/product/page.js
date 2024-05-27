"use client";
import OrderDetails from "../../../details/page";
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation'
import auth from "@/firebase.init";
export default function Product({ data }) {
  let { id, img, name, display, ram, processor } = data;
  const [user, loading, error] = useAuthState(auth);
 const r=useRouter();
  function seeClick() {
  
    if (user) {
      r.push(`/productDetails/${id}`);
    } 
   if(user==null){
     r.push("/logReg")
    }
  }
  return (
    <div>
      {
        <div className=" transition card w-70 bg-base-100 shadow-lg rounded-lg">
          <figure>
            <Image
              src={img}
              width={250}
              height={250}
              alt="Picture of the author"
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Display:{display}</div>
              <div className="badge badge-outline">Ram:{ram}</div>
            </div>
            <div>
              <button
                onClick={()=> seeClick()}
                className="btn btn-outline btn-wide my-4 "
              >
                See More...
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
