import Image from "next/image";
import React from "react";
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/29130848/pexels-photo-29130848/free-photo-of-serene-pine-forest-with-ocean-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  fill />
      </div>
    </div>
  );
};

export default AboutPage;
