import { allPosts, Post } from "content-collections";

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const post = allPosts.find(post => post._meta.path === slug);
  return post || null;
};

export const getAllPosts = async (): Promise<Post[]> => {
  return allPosts;
};
