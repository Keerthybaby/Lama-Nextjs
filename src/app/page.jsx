"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleLearnMoreClick = () => {
    router.push("/about");
  };

  const handleContactClick=()=>{
    router.push("/contact")
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Creative Thoughts Agency.
          </h1>
        {/* <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est,
          optio dolorem labore saepe laborum nesciunt ratione recusandae
          repellendus odio, pariatur nulla quaerat sunt enim fuga quae
          similique. Suscipit, molestiae.
        </p> */}
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleLearnMoreClick}>
            Learn More
          </button>

          <button className={styles.button} onClick={handleContactClick}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
