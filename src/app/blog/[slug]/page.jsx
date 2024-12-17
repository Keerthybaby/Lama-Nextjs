import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17410391/pexels-photo-17410391/free-photo-of-tourist-boat-on-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/17410391/pexels-photo-17410391/free-photo-of-tourist-boat-on-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quidem nisi id nobis incidunt minima eos, iusto fugiat vero, libero, quisquam laudantium quae! Ut quam delectus earum ad dolore inventore.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
