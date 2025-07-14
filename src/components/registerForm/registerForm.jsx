"use client";
import React, { useEffect, useState } from "react";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <div className={styles.passwordContainer}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
        />
        <span
          className={styles.eyeIcon}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </span>
      </div>
      <div className={styles.passwordContainer}>
        <input
          type={showPasswordRepeat ? "text" : "password"}
          placeholder="password again"
          name="passwordRepeat"
        />
        <span
          className={styles.eyeIcon}
          onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
        >
          {showPasswordRepeat ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
