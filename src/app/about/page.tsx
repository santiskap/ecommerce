"use client";
import Link from "next/link";
import React from "react";

const multiplicar = (a: number, b: number, imprimir: string) => {
  console.log(imprimir, a * b )
}
multiplicar(20, 5, 'El resultado es:');
export default function AboutPage({datosprops}) {
    return (
        <h1>About</h1>

    )
}