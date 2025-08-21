import React from "react";
import { useNavigate } from "react-router-dom";
import machoImg from "../../assets/macho.png"
import generalstoreImg from "../../assets/genrealstore.webp"
import wahInd from "../../assets/wahind.jpeg"
import mohaniTea from "../../assets/mohanitea.jpeg"
import shantiTel from "../../assets/shanti.jpeg"
import delivery from "../../assets/delivery.svg";
import ContactPage from "./Contact";
import TestimonialsSection from "./Testimonial";
import Footer from "./Footer";


export default function HomePage() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Hosiery",
      img: machoImg,
      path: "/category/hosiery",
    },
    {
      name: "Cosmetics",
      img: shantiTel,
      path: "/category/cosmetics",
    },
    {
      name: "Food Products",
      img: mohaniTea,
      path: "/category/food",
    },
    {
      name: "Daily Essentials",
      img: generalstoreImg,
      path: "/category/essentials",
    },
    {
      name: "Spices",
      img: wahInd,
      path: "/category/spices",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl pt-2 font-bold text-center mb-8 bg-gradient-to-r from-[#e3942c] via-[#f1c27d] to-indigo-800 bg-clip-text text-transparent animate-gradient">
          भंडारी इंटरप्राइजेज बरुआसागर
        </h1>
        <h1 className="text-3xl font-bold  text-center mb-12 ">
          🛍 Shop Catalogue
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate(cat.path)}
              className="cursor-pointer text-center group"
            >
              {/* Circular Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Name */}
              <p className="mt-4 font-semibold text-gray-700 group-hover:text-indigo-600 transition duration-300">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full overflow-hidden bg-gray-100 py-10">
        {/* Moving SVG */}
        <div className="relative w-full h-32">
          <img
            src={delivery}
            alt="Delivery"
            className="w-32 h-32 absolute animate-truck"
          />
        </div>

        {/* Tagline */}
        <p className="text-center text-2xl font-bold  bg-gradient-to-r from-[#2c7ee3] via-[#62a543] to-red-800 bg-clip-text text-transparent animate-gradient">
          We Deliver Quality Products to Your Doorstep!
        </p>

        {/* Inline CSS animation */}
        <style>
          {`
            @keyframes truckMove {
              0% { left: -150px; }
              100% { left: 100%; }
            }
            .animate-truck {
              animation: truckMove 5s linear infinite;
            }
          `}
        </style>
      </div>
    </div>

    <TestimonialsSection />
    <ContactPage />
    <Footer />

    </>
  );
}
