import React, {useState} from "react";
import ProductCard from "@/components/ProductCard";

async function loadProd(id){
   const res = await fetch(`https://dummyjson.com/products/${id}`);
   const data = await res.json();
    return data;
}
async function PaginaProducto({params}) {
   const product = await loadProd(params.tiendaId)
    return (
            <div>
                <img className="rounded-md" src={product.thumbnail} alt=""/>
                <h1 className="text-2xl my-4 px-4 py-2 bg-violet-700 text-white rounded-md capitalize inline-block">{product.title}</h1>
                <p className="text-gray-800 text-sm">{product.description}</p>
                <p className="text-3xl text mt-4 text-violet-700 bg-gray-200 rounded-md p-2 px-4 inline-block">${product.price}</p>
                <div className="w-full">
                    <button className="mt-4 text-white bg-violet-600 px-3 py-1 rounded-md">
                        Comprar
                    </button>
                </div>
            </div>
    )
}

export default PaginaProducto