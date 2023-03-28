import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  console.log(props, "blog page data");
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Popular Blogs</h1>
          {blogs.map((item) => {
            return (
              <>
                <div className={styles.blogItem} key={item.slug}>
                  <Link href={`/blogpost/${item.slug}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p className={styles.blogItemPara}>
                    {item.content.substring(0, 140)} .....
                  </p>
                </div>
              </>
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    // console.log(myfile, "filess");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
