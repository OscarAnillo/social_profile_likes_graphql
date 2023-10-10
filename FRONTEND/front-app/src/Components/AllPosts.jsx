import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../Queries/post-queries";
import { PostComponent } from "./PostComponent";

export const AllPost = () => {
  const result = useQuery(GET_ALL_POSTS);
  const { data } = result;

  return (
    <>
      {data?.allPosts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </>
  );
};
