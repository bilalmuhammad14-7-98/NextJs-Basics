import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
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
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;
