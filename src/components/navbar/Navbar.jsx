import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {/* Logo */}
        {/* <Image src="/pixo.webp" width={100} height={100} alt="logo" /> */}
        PIXO
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
