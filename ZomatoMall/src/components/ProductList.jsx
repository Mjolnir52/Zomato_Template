import React from "react";

const ProductCard = () => (
  <div className="bg-white shadow-md p-4 rounded-lg text-center">
    <div className="text-2xl mb-2">🛒</div>
    <h3 className="font-semibold text-lg">Product 1</h3>
    <p className="text-gray-600 text-sm">This is a short product description with some useful info.</p>
  </div>
);

const ProductList = () => {
  return (
    <div className="p-8 bg-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {Array.from({ length: 5 }).map((_, idx) => (
        <ProductCard key={idx} />
      ))}
    </div>
  );
};

export default ProductList;
