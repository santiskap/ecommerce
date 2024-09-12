import { GetStaticProps } from 'next';
import PostCard from "@/components/PostCard";

// Define un tipo para un post
interface Post {
  id: number;
  title: string;
  body: string;
}

// Define las props que pasas al componente
interface PostsPagesProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<PostsPagesProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  
  return {
    props: {
      posts: data,
    },
  };
};

const PostsPages = ({ posts }: PostsPagesProps) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostsPages;
