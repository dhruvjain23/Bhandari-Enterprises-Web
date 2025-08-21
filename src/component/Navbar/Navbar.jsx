import React, { useState } from "react";
import { ShoppingCart, User, Search, Menu, X, Phone, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" font-['Roboto_Condensed'] sticky top-0 bg-white py-5 items-center max-sm:py-7 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
       
       
          <div className="flex flex-col items-center">
            <Link to="/" className="font-bold text-3xl cursor-pointer">
              Bhandari Enterprises
            </Link>
            <div className="flex items-center w-full justify-center">
              <div className="flex-grow border-t "></div>
              <span className="mx-1.5 max-sm:text-[1rem] text-lg ">
                Barwasagar
              </span>
            </div>
          </div>

          

          {/* Desktop Menu */}
          <div className="hidden md:flex mt-2.5 text-[18px] space-x-6 ">
            <a href="/" className=" hover:text-yellow-500 transition">Home</a>
            <a href="#" className=" hover:text-yellow-500 transition">Products</a>
            <a href="#" className=" hover:text-yellow-500 transition">Deals</a>
            <a href="#contact" className=" hover:text-yellow-500 transition">Contact</a>
          </div>


          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center cursor-pointer bg-gray-900 text-white rounded-2xl p-4 max-sm:p-3">
              <PhoneCall size={22} className=" fill-white cursor-pointer" />
              <a href="tel:+919451169062" className=" hover:underline ml-2">
                  9451169062
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col items-center mt-5 px-4 pt-2 pb-4 space-y-3 animate-slideDown">
          <a href="#" className="block bg-amber-600 rounded-2xl px-9  hover:text-gray-200">Home</a>
          <a href="#" className="block bg-amber-600 rounded-2xl px-9  hover:text-gray-200">Shop</a>
          <a href="#" className="block bg-amber-600 rounded-2xl px-9 hover:text-gray-200">Deals</a>
          <a href="#contactpage" className="block bg-amber-600 rounded-2xl px-7 hover:text-gray-200">Contact</a>

        </div>
      )}
    </nav>
  );
}


