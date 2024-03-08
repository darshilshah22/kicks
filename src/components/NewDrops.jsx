import React from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { products } from "../constants";

function NewDrops() {
  return (
    <div className="w-full mt-10 py-20 px-14">
      <div className="flex items-center justify-between">
        <p className="uppercase font-semibold text-6xl w-1/2">
          Don't miss out new drops
        </p>
        <Button title="Shop New Drops" />
      </div>
      <div className="flex items-center justify-between mt-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.image}/>
        ))}
      </div>
    </div>
  );
}

export default NewDrops;
