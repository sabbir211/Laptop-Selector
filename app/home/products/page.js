import React from "react";
import Product from "./product/page";
import { IoIosArrowDown } from "react-icons/io";
export default function Products() {
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
  return (
    <div className="mt-20 ">
      <div className="w-full  border-b-2 border-indigo-900 mb-5">
        {" "}
        <div className="text-4xl text-center mt-10 py-5">
          ---LATEST LAPTOPS---
        </div>
      </div>
      <div className="flex relative">
        <div className="bg-white">
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center ">
              {/* Page content here */}

              <label
                htmlFor="my-drawer-2"
                className=" lg:hidden  absolute top-0  bg-blue-500 text-white  shadow-2xl px-4 py-2 z-20 ml-10"
              >
                Filter
              </label>
            </div>
            <div className="drawer-side z-30 ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay z-40 bg-white"
              ></label>
              <ul className="menu p-4 w-80 min-h-full text-base-content ">
                {/* Sidebar content here */}
                <li>
                  <div className="dropdown dropdown-bottom">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" m-1 flex text-xl"
                    >
                      Sort by
                      <span className="ml-1">
                        <IoIosArrowDown className="text-2xl" />
                      </span>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-none w-52"
                    >
                      <li>
                        <a>Price low to high</a>
                      </li>
                      <li>
                        <a>Price high to low</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <hr className="h-4"></hr>
                <li className="text-xl">Add Filters</li>
                <li>
                  <p className="text-2xl font-semibold">Processor Brands</p>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">AMD</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">INTEL</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">APPLE</span>
                    </label>
                  </div>
                </li>
                <li>
                  <p className="text-2xl font-semibold">Processor Series</p>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Intel core i3</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Intel core i5</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Intel core i7</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Intel core i9</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Intel code Ultra</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Ryzen 3</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Ryzen 5</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">Ryzen 7</span>
                    </label>
                  </div>
                </li>
                <li>
                  <p className="text-2xl font-semibold">
                    Processor Generations
                  </p>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">5th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">6th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">7th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">8th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">11th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">12th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">13th</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">ryzen 3000</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">ryzen 5000</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">ryzen 7000</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start rounded-none">
                      <input
                        type="checkbox"
                        className="checkbox rounded-none text-sm"
                      />
                      <span className="label-text ml-2">ryzen 8000</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:gap-10  gap-4 md:grid-cols-3 mx-auto justify-center lg:ml-10 ">
          {data.map((data) => {
            return <Product key={data.id} data={data}></Product>;
          })}
        </div>
      </div>
    </div>
  );
}
