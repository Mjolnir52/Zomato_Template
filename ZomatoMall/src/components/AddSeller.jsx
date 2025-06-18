import React from "react";

const AddSeller = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white min-h-screen flex justify-center items-center">
      <form className="bg-white text-black p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          📦 Add New Seller
        </h2>
        <input className="mb-4 w-full p-2 border rounded" placeholder="e.g. Rahul Traders" />
        <input className="mb-4 w-full p-2 border rounded" placeholder="seller@email.com" />
        <input className="mb-4 w-full p-2 border rounded" placeholder="e.g. Rahul Kirana Store" />
        <div className="flex gap-2 mb-4">
          <input className="w-1/2 p-2 border rounded" placeholder="9876543210" />
          <input className="w-1/2 p-2 border rounded" placeholder="City, Street, Pincode" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          ✅ Add Seller
        </button>
      </form>
    </div>
  );
};

export default AddSeller;
