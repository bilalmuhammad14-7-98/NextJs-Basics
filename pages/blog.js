import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        console.log(data, "data");
        setBlogs(data.data);
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Popular Blogs</h2>
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
          {/* <div className={styles.blogItem}>
            <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascripy in 2022?</h3>
            </Link>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascripy in 2022?</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn javascripy in 2022?</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div> */}
        </main>
      </div>
    </>
  );
};

export default Blog;
