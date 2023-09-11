"use client";
import Link from "next/link";
import React from "react";

export default function PostCard({post}) {
    return (
            <div className="bg-gray-100 p-4 rounded-md border-solid border-1 border-gray-300">
            <Link href={`/posts/${post.id}`}>
                <h1 className="text-blue-950 text-2xl pb-3 leading-tight"> {post.id}. {post.title}</h1>
            </Link>
            <p className="text-gray-800">{post.body}</p>
            <button className="items-end mt-4 text-white bg-blue-400 px-3 py-1 rounded-md" onClick={() => {
                alert ("Funciona")
            }}>click</button>
            </div>
    )
}