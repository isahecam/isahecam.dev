import PostList from "@/components/PostList";

function Posts() {
  return (
    <section className='mt-16 space-y-4' id='posts'>
      <h2 className='text-xl font-bold text-black'>Posts</h2>
      <PostList />
    </section>
  );
}
export { Posts };
