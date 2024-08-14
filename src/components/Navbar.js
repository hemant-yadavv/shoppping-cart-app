"use client";

import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/Context/AppContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <div className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-gray-200 bg-gradient-to-r from-purple-800 to-pink-500 backdrop-blur-lg transition-all">
      <nav className="px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 max-w-6xl mx-auto bg-transparent">
        <Link href="/">
          <p className="text-white font-bold text-2xl">Profile.fyi</p>
        </Link>
        <div className="flex items-center font-medium text-white space-x-4 sm:space-x-6">
          <Link href="/">
            <p className="text-white hover:text-pink-200 transition-all duration-300 font-semibold">
              Home
            </p>
          </Link>
          <div className="relative group">
            <Link href="/Cart">
              <FaShoppingCart className="text-2xl text-white" />
            </Link>
            {cart.length !== 0 && (
              <div className="absolute -top-1 -right-2 bg-yellow-500 text-xs w-5 h-5 flex justify-center items-center animation-bounce rounded-full text-white">
                <p>{cart.length}</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;