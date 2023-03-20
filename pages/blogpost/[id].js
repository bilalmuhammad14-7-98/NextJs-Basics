import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  console.log(router.query, "router");

  const { id } = router.query;

  return (
    <>
      <p>Post is : {id}</p>
    </>
  );
};

export default Post;
