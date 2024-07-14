import Image from "next/image";
import React from "react";
export default function ProductDetails({ params }) {
  let data = [
    {
      id: 1,
      name: "Asus Vivobook 15",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 2,
      name: "Asus Vivobook 16",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 3,
      name: "Asus Vivobook 14",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 4,
      name: "Asus Vivobook 12",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 5,
      name: "Asus Vivobook 11",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 6,
      name: "Asus Vivobook 16",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 7,
      name: "Asus Vivobook 18",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 8,
      name: "Asus Vivobook 19",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
    {
      id: 9,
      name: "Asus Vivobook 19",
      price: 52000,
      stock: 10,
      img: "https://i.ibb.co/7vTWBDq/vivobook-15-x1502za-01-500x500.webp",
      processor: " i3 1215u",
      display: "15.6 inch",
      ram: "8 gb",
      keyboard: "Backlit",
    },
  ];

  const item = data.find((element) => element?.id == params?.id);
  return (
    
    <div className="flex  m-10 gap-5 bg-white p-10 ">
      <div className=" ">
        <Image src={item?.img} width={500} height={500} alt="laptop image"></Image>
        <div className="flex m-4 gap-6">
          <Image
            className="hover:blur-sm hover:cursor-pointer"
            src={item?.img}
            width={100}
            height={100}
            alt="laptop image"
          ></Image>
          <Image
            className="hover:blur-sm hover:cursor-pointer"
            src={item?.img}
            width={100}
            height={100}
            alt="laptop image"
          ></Image>
          <Image
            className="hover:blur-sm hover:cursor-pointer"
            src={item?.img}
            width={100}
            height={100}
            alt="laptop image"
          ></Image>
          <Image
            className="hover:blur-sm hover:cursor-pointer"
            src={item?.img}
            width={100}
            height={100}
            alt="laptop image"
          ></Image>
        </div>
      </div>
      <div className="text-xl">
        <h1 className="text-5xl">{item?.name}</h1>
        <div className="flex  text-2xl  gap-5 mt-3">
          <div>
            <p className="">Price: {item?.price}BDT</p>
          </div>
          <div>
            <p> Stock: {item?.stock}</p>
          </div>
        </div>
        <div className="my-10">
          {" "}
          <p className="">Processor: {item?.processor}</p>
          <p className="">Display: {item?.display}</p>
          <p className="">RAM: {item?.ram}</p>
          <p className="">Keyboard: {item?.keyboard}</p>
        </div>
        <button className="btn btn-outline px-7 my-9"> BUY NOW</button>
      </div>
    </div>
  );
}
