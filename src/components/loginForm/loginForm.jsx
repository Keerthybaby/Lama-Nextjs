"use client";
import React, { useEffect, useState } from "react";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <div className={styles.passwordContainer}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
          {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
        </span>
      </div>

      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
