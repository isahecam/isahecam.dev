import { getAllPosts } from "@/services/BlogService";
import PostCard from "./PostCard";

export default async function PostList() {
  const allPosts = await getAllPosts();
  console.log(allPosts);

  return (
    <ul className='flex flex-col'>
      {allPosts.map(post => (
        <li key={post._meta.path} className='contents'>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
