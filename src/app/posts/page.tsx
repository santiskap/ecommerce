import React from 'react';
import PostCard from "@/components/PostCard";

// Aca define la interfaz en Ts para los posts
interface Post {
    id: number;
    title: string;
    body: string;
}

// Función para cargar los posts
async function loadPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

// Componente para mostrar los posts
async function PostsPages() {
    const posts: Post[] = await loadPosts();

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {posts.map((post: Post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
}

export default PostsPages;
