import PostCard from "@/components/PostCard";

async function loadPosts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}
async function PostsPages() {
    const posts = await loadPosts();

    return (
        <div>
            {posts.map((post) =>(
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map ((post) => (
                        <PostCard post={post} key={post.id} />
                        ))}

                </div>
            ))}
        </div>
    );
}

export default PostsPages;