import Link from "next/link";
import React from "react";


export default function Services() {
  return (
    <div className=" my-10 ">
     <div className="  grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
    <Link className=" " href="/">  <div className="  card col-auto w-96 bg-base-100 shadow-xl">
          <div className="relative card-body overflow-hidden"> 

          <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">   </div>
         
          <div className="absolute  -top-10 -left-10   rounded-full bg-blue-300 w-24 h-24 ">   </div>
          <div className="z-20">
             <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Buy Now</button>
          </div>
          </div>
         
        </div>
    
      
      </div></Link>
      <Link className=" " href="/">  <div className="  card col-auto w-96 bg-base-100 shadow-xl">
      
      <div className="relative card-body overflow-hidden"> 
      <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">   </div>
      <div className="absolute  -top-10 -left-10  rounded-full bg-blue-300 w-24 h-24 ">   </div>
      <div className="z-20">
         <h2 className="card-title">Servicing</h2>
      <p>We provide best Services al over bangladesh</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline btn-primary">Take a Tour</button>
      </div>
      </div>
     
    </div>

  
  </div></Link>
  <Link className=" " href="/">  <div className="  card col-auto w-96 bg-base-100 shadow-xl">
      
      <div className="relative card-body overflow-hidden"> 
      <div className="absolute  -right-10 -bottom-10   rounded-full bg-blue-300 w-24 h-24 ">   </div>
      <div className="absolute  -top-10 -left-10  rounded-full bg-blue-300 w-24 h-24 ">   </div>
      <div className="z-20">
         <h2 className="card-title">Best Support</h2>
      <p>We provide special online and offline support 24/7</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline btn-primary">Take a Tour</button>
      </div>
      </div>
     
    </div>

  
  </div></Link>
     </div>
    </div>
  );
}
