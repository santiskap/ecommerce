import React from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-md">
      
      <img
        className="rounded-md aspect-video mb-4"
        src={product.thumbnail}
        alt={product.title}
      />
      <h1 className="text-violet-950 text-2xl pb-3 leading-tight hover:text-purple-700">
        <Link href={`/tienda/${product.id}`}>{product.title}</Link>
      </h1>
      <p className="text-gray-800 text-sm">{product.description}</p>
      <p className="text-2xl text mt-4 text-violet-700"> ${product.price}</p>
      <button
        className="mt-4 text-white bg-violet-600 hover:bg-purple-600 px-3 py-1 rounded-md"
        onClick={() => {
          alert("Funciona");
        }}
      >
        Comprar
      </button>
    </div>
  );
}
