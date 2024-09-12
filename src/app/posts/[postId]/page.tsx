import React from "react";

async function loadPost(id){
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data = await res.json()
    return data
}
async function Page({params}) {
   const post = await loadPost(params.postId)
    return (
        <div>
            <h1 className="text-3xl my-6 px-6 bg-violet-700 py-4 text-white rounded-md capitalize">{post.title}</h1>
            <p className="capitalize">{post.body}</p>
        </div>
    )
}

export default Page