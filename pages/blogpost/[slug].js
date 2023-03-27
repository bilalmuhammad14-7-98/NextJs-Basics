import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";

const Post = () => {
  const router = useRouter();

  console.log(router.query, "router");

  const { slug } = router.query;

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Title of the page is : {slug}</h1>
          <hr />
          <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          </div>
        </main>
      </div>
    </>
  );
};

export default Post;
