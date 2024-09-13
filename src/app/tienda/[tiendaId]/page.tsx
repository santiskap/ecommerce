"use client";
import React, { useEffect, useState } from "react";

// Define un tipo para el producto
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

async function loadProd(id: number): Promise<Product> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

interface PaginaProductoProps {
  params: { tiendaId: number };
}

const PaginaProducto: React.FC<PaginaProductoProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await loadProd(params.tiendaId);
        if (data) {
          setProduct(data);
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Error loading product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.tiendaId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product data available</p>;

  return (
    <div>
      <img className="rounded-md" src={product.thumbnail} alt={product.title} />
      <h1 className="text-2xl my-4 px-4 py-2 bg-violet-700 text-white rounded-md capitalize inline-block">
        {product.title}
      </h1>
      <p className="text-gray-800 text-sm">{product.description}</p>
      <p className="text-3xl text mt-4 text-violet-700 bg-gray-200 rounded-md p-2 px-4 inline-block">
        ${product.price}
      </p>
      <div className="w-full">
        <button className="mt-4 text-white bg-violet-600 px-3 py-1 rounded-md">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PaginaProducto;