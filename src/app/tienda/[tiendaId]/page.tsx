"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

async function loadProd(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (fetchIssue) {
    console.error('Issue fetching product:', fetchIssue);
    return null;
  }
}

interface PaginaProductoProps {
  params: { tiendaId: number };
}

const PaginaProducto: React.FC<PaginaProductoProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchIssue, setFetchIssue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await loadProd(params.tiendaId);
        if (data) {
          setProduct(data);
        } else {
          setFetchIssue('Product not found');
        }
      } catch {
        setFetchIssue('Problem loading product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.tiendaId]);

  if (loading) return <p>Loading...</p>;
  if (fetchIssue) return <p>{fetchIssue}</p>;
  if (!product) return <p>No product data available</p>;

  return (
    <div className="flex items-center justify-center w-3/5 mx-auto min-h-screen space-x-8">
      <Image className="rounded-md" src={product.thumbnail} alt={product.title} width={500} height={300} />
      <div className="flex flex-col items-start mt-10">
        <h1 className="text-2xl my-4 px-4 py-2 bg-gray-800 text-white rounded-md capitalize">
          {product.title}
        </h1>
        <p className="text-gray-800 text-sm w-10/12">{product.description}</p>
        <p className="text-3xl text mt-4 text-violet-700 bg-gray-200 rounded-md p-2 px-4 inline-block float-left">
          ${product.price}
        </p>
        <button className="mt-4 text-white bg-violet-900 hover:bg-green-600 px-10 py-3 text-base rounded-md">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PaginaProducto;