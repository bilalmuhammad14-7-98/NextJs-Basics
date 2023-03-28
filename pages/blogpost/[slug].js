import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();

  console.log(router.query, "router");

  const { slug } = router.query;

  const [blog, setBlog] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        console.log(data, "data");
        setBlog(data.data);
      });
  }, [router.isReady]);

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

export default Post;
