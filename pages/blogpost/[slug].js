import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import { useState, useEffect } from "react";

const Post = (props) => {
  console.log(props, "single blog page data");
  const router = useRouter();

  console.log(router.query, "router");

  const { slug } = router.query;

  const [blog, setBlog] = useState(props.blog.data);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{blog?.title}</h1>
          <hr />
          <div>{blog?.content}</div>
        </main>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query, "router");

  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let blog = await data.json();
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default Post;
