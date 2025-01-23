"use client";
import React, { useState } from "react";
import styles from "./adminUsersForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  // const [previewImg, setPreviewImg] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setPreviewImg(imageUrl);
  //   }
  // };
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      {/* <input
        type="file"
        name="img"
        accept="image/*"
        onChange={handleImageChange}
      />
      {previewImg && (
        <img src={previewImg} alt="Preview" className={styles.previewImg} />
      )} */}
      <select name="isAdmin">
        {/* <option value="false">IsAdmin</option> */}
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
      {/* {state?.error} */}
    </form>
  );
};

export default AdminUserForm;
