import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  console.log(router.query, "router");

  const { slug } = router.query;

  return (
    <>
      <p>Post is : {slug}</p>
    </>
  );
};

export default Post;
