import React, { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostsForm from "@/components/adminPostsForm/adminPostsForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUsersForm from "@/components/adminUsersForm/adminUsersForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>

        <div className={styles.col}>
          <AdminPostsForm userId={session.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>

        <div className={styles.col}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;