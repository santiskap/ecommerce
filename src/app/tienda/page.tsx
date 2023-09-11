"use client";
import React, { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);

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
            <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 gap-4">
                {Array.isArray(products) &&
                    products.map((product) => (
                    <ProductCard product={product} key={product.id} />

                    ))}
            </div>
        </div>
    );
}

export default ProductList;
