import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const postCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && <Image
            src={post.img}
            alt=""
            fill
            className={styles.img}
            unoptimized
          />}
        </div>
        <span className={styles.date}>
          {/* 01.01.2024 */}
          {new Date(post.createdAt).toLocaleDateString("en-GB",{
            day:"2-digit",
            month:"2-digit",
            year:"numeric",
          }).replace(/\//g,".")}

          </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.body}
        </p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default postCard;
