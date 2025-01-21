import React from "react";
import styles from "./adminUsers.module.css";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.details}>
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postUsers}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            {/* <form action={() => deletePostWithId(post.id)}> */}
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}> Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
