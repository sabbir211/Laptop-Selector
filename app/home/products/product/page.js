import OrderDetails from "../../../details/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product({ data }) {
  let { id, img, name, display, ram, processor } = data;
  return (
    <div>
      <div className="hover:-translate-y-2 transition card w-70 bg-base-100 shadow-lg rounded-lg">
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
            <div>{/* <Link href={OrderDetails}>See more..</Link> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
