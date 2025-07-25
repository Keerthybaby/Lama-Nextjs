"use client";
import React from "react";
import styles from "./adminPostsForm.module.css";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";

const AdminPostsForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <input type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostsForm;