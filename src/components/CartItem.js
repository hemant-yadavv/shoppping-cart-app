"use client";

import { MdDelete } from "react-icons/md";
import QuantityCounter from "./QuantityCounter";
import { useCart } from "@/Context/AppContext";
import toast from "react-hot-toast";

const CartItem = ({ id, image, title, description, price, quantity }) => {
  const { remove, add, removeComplete } = useCart();

  const itemPrice = price * quantity;

  const AddQuantity = () => {
    add(id);
    toast("Quantity Increased", {
      icon: "✌️",
    });
  };

  const removeQuantity = () => {
    remove(id);
    toast("Quantity Decreased", {
      icon: "👎",
    });
  };

  const removeFromCart = (id) => {
    removeComplete(id);
    toast.error("Item removed from cart");
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-purple-300 mt-2 mb-2 md:mx-5 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[40%] select-none">
          <img src={image} alt={title} className="rounded-lg" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-purple-700 font-semibold">{title}</h1>
          <h1 className="text-base text-purple-500 font-medium text-balance">
            {`${description.substr(0, 100)}...`}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-slate-700">${itemPrice}</p>
            <div>
              <QuantityCounter
                quantity={quantity}
                increase={AddQuantity}
                decrease={removeQuantity}
              />
            </div>
            <div
              className="bg-pink-200 group hover:bg-pink-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
              onClick={() => removeFromCart(id)}
            >
              <MdDelete className="text-purple-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
