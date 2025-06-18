import React from "react";
import foodImage from "../assets/food.jpeg";// optional, or use an <img src=""> directly

const Welcome = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl mt-10">
      <div className="lg:w-1/2">
        <img src="https://www.quibustrainings.com/wp-content/uploads/2023/02/Zomato-Marketing-Strategy-%E2%80%93-A-Case-Study-2023-1.webp" alt="Food App" className="rounded-xl w-[90%]" />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
        <h1 className="text-5xl font-bold text-brown-800">Welcome</h1>
        <h2 className="text-3xl text-blue-700 mt-2">To Ultimate</h2>
        <p className="text-2xl font-semibold mt-4">
          Food Delivery App — <span className="text-pink-700">Parul-Zomato</span>
        </p>
        <p className="italic mt-4">“Good Food with Good Mindset” 🍽️</p>
        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
          Explore Now 🚀
        </button>
      </div>
    </section>
  );
};

export default Welcome;
