"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";

// Define el tipo para el producto con las propiedades correctas
interface ApiProduct {
    id: string; // Cambiado a string según el error
    title: string;
    price: number;
    thumbnail: string;
    description: string;
    // Agrega más propiedades si es necesario
}

function ProductList() {
    // Usa el tipo ApiProduct para el estado de products
    const [products, setProducts] = useState<ApiProduct[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                // Comprueba si la respuesta es un objeto con propiedades de productos
                if (data && data.products && Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    console.error('La respuesta de la API no contiene un arreglo de productos:', data);
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl my-6 text-center bg-violet-700 py-4 text-white rounded-md">Productos</h1>
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-4">
                {Array.isArray(products) &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </div>
        </div>
    );
}

export default ProductList;
