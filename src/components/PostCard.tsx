"use client";
import Link from "next/link";
import React from "react";

// Define la interfaz para el tipo del post
interface Posteo {
  id: number;
  title: string;
  body: string;
}

// Usa la interfaz para el tipo del prop
export default function PostCard({ post }: { post: Posteo }) {
    return (
        <div className="bg-white p-4 rounded-md">
            <Link href={`/posts/${post.id}`}>
                <h1 className="text-blue-950 text-2xl pb-3 leading-tight capitalize">
                    {post.title}
                </h1>
            </Link>
            <p className="text-gray-800 capitalize">{post.body}</p>
            <button
                className="mt-4 text-white bg-violet-600 px-3 py-1 rounded-md cursor-pointer"
                onClick={() => {
                    alert("Este es un botón funcional");
                }}
            >
                Leer
            </button>
        </div>
    );
}
