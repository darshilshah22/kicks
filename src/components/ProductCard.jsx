import React from "react";

function ProductCard({ product }) {
  return (
    <div className="max-w-[260px]">
      <div
        className={`relative bg-center bg-cover bg-no-repeat h-[300px] rounded-3xl border-[6px] border-[#fafafa]`}
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <p className="bg-[#4A69E2] rounded-tl-3xl rounded-br-3xl px-3 py-2 w-fit font-medium">
          New
        </p>
      </div>
      <p className="text-xl font-semibold mt-4">
        ADIDAS 4DFWD X PARLEY RUNNING SHOES
      </p>
      <div className="bg-white py-2 rounded-lg flex justify-center mt-4">
        <p className="text-[#232321] font-medium">
          View Product - <span className="text-[#FFA52F]"> $125</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
