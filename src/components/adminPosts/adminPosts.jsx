"use server";
import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  // const deletePostWithId = ({ id }) => {
  //   return deletePost.bind(null, id);
  // };
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.details}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            {/* <form action={() => deletePostWithId(post.id)}> */}
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}> Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;