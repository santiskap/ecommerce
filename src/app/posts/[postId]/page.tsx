import React from 'react';
// Definir la interfaz para los parámetros de la página
interface PageParams {
    postId: string;
}

// Función para cargar un post específico basado en el ID
async function loadPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

// Componente de página que recibe parámetros y muestra el post
async function Page({ params }: { params: PageParams }) {
    const post = await loadPost(params.postId);
    return (
        <div>
            <h1 className="text-3xl my-6 px-6 bg-violet-700 py-4 text-white rounded-md capitalize">{post.title}</h1>
            <p className="capitalize">{post.body}</p>
        </div>
    );
}

export default Page;