"use client";
import Link from "next/link";
import React from "react";

export default function ProductCard({product}) {
    return (
            <div className="grid content-between bg-gray-100 p-4 rounded-md border-solid border-1 border-gray-300">
                <div>
                    <Link href={`/tienda/${product.id}`}><img className="rounded-md aspect-video mb-4" src={product.thumbnail} alt={product.title}/></Link>
                    <h1 className="text-blue-950 text-2xl pb-3 leading-tight">
                        <Link href={`/tienda/${product.id}`}>{product.id}. {product.title}</Link>
                    </h1>
                    <p className="text-gray-800 text-1xl">{product.description}</p>
                    <h2 className="text-2xl mt-4"> ${product.price}</h2>
                </div>
                <div className="">
                    <button className="w-full mt-4 text-white bg-blue-400 px-3 py-1 rounded-md" onClick={() => {
                        alert ("Funciona")}}>
                        Comprar
                    </button>
                </div>


            </div>
    )
}