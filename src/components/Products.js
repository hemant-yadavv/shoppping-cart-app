"use client";

import { useCart } from "@/Context/AppContext";
import { Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Products = ({ id, title, description, price, images }) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const { cart, add, remove } = useCart();

  const changeIndex = useCallback(() => {
    // Update the index to show the next image
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    // Set up an interval to change the image index every 2 seconds
    const interval = setInterval(() => {
      changeIndex();
    }, 2000);
    // Clean up the interval on component unmount or when dependencies change
    return () => clearInterval(interval);
  }, [show, changeIndex]);

  const addToCart = (id) => {
    add(id);
    toast.success("Item Added to Cart");
  };

  const removeFromCart = (id) => {
    remove(id);
    toast("Item Removed");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl cursor-pointer bg-white">
        <div onClick={() => setShow(true)}>
          <p className="text-purple-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {title.length > 10 ? `${title.substr(0, 16)}...` : `${title}`}
          </p>
        </div>
        <div>
          <p className="w-40 text-purple-400 font-normal text-[10px] text-left">
            {description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
        <div onClick={() => setShow(true)} className="h-[180px]">
          <img src={images[0]} alt={title} className="w-full h-full select-none rounded-lg" />
        </div>

        <div className="flex items-center justify-between gap-14 w-full mt-5">
          <div>
            <span className="text-slate-800 font-medium line-through decoration-0">${Math.round(price * 1.1)}</span>
            {/* <span className="text-sm text-green-600">  10% off</span> */}
            <p className="text-green-700 font-bold">${price}</p>
          </div>
          <div>
            {cart.some((item) => item.item.id === id) ? (
              <button
                className="text-pink-700 border-2 border-pink-600 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-pink-600 hover:text-white transition-all ease-in duration-300 select-none"
                onClick={() => removeFromCart(id)}
              >
                Remove Item
              </button>
            ) : (
              <button
                className="text-pink-700 border-2 border-pink-600 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-pink-600 hover:text-white transition-all ease-in duration-300 select-none"
                onClick={() => addToCart(id)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        show={show}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="overflow-y-auto max-w-[900px] w-full max-h-[80vh] rounded-xl bg-purple-900/75 backdrop-blur-md border py-5 px-10 border-pink-500/80">
            <button
              onClick={() => setShow(false)}
              className="fixed top-1 right-1 z-10 flex overflow-hidden items-center justify-center rounded-full border border-white/75 p-2 group"
            >
              <div className="h-full w-full absolute -left-[100%] bg-pink-600 group-hover:left-0 transition-all duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white z-10 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col lg:flex-row space-y-4 gap-10 text-center lg:text-start">
              <img
                src={images[index]}
                alt={title}
                className="mx-auto h-[350px] opacity-80 w-full object-cover rounded-lg select-none"
              />
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-5">
                  <h2 className="text-white text-2xl leading-8 font-semibold">
                    {title}
                  </h2>
                  <p className="text-white text-sm">{description}</p>
                </div>
                <div className="flex items-center justify-between gap-16 w-full mt-5">
                  <div>
                    {/* <p className="text-pink-400 text-2xl font-bold">
                      ${price}
                    </p> */}
                    <span className="text-slate-800 font-semibold line-through decoration-0 text-xl">${Math.round(price * 1.1)}</span>
                    <span className="text-sm text-green-600 font-bold">  10% off</span>
                    <p className="text-green-500 font-extrabold text-3xl">${price}</p>
                  </div>
                  <div>
                    {cart.some((item) => item.item.id === id) ? (
                      <button
                        className="text-gray-100 border-2 border-gray-100 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-gray-100 hover:text-gray-700 transition-all ease-in duration-300 select-none"
                        onClick={() => removeFromCart(id)}
                      >
                        Remove Item
                      </button>
                    ) : (
                      <button
                        className="text-gray-100 border-2 border-gray-100 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-gray-100 hover:text-gray-700 transition-all ease-in duration-300 select-none"
                        onClick={() => addToCart(id)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Products;
