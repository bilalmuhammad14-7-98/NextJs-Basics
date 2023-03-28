import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import { useState, useEffect } from "react";
import * as fs from "fs";

const Post = (props) => {
  console.log(props, "single blog page data");
  const router = useRouter();

  console.log(router.query, "router");

  const { slug } = router.query;

  const [blog, setBlog] = useState(props.blog);

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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextJs" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context, "router");

  const { slug } = context.params;

  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { blog: JSON.parse(blog) }, // will be passed to the page component as props
  };
}

export default Post;
