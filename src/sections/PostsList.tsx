import { Notice } from "@/components/Notice";

function PostsList() {
  return (
    <section className='mt-16' id='posts'>
      <h2 className='mb-8 text-xl font-bold text-black'>Posts</h2>
      <Notice />
    </section>
  );
}
export { PostsList };
