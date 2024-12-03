import React from 'react';
import styles from "./postCard.module.css"
import Image from 'next/image';
import Link from 'next/link';

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/17410391/pexels-photo-17410391/free-photo-of-tourist-boat-on-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>
          Title
        </h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, earum unde. Mollitia, illum labore possimus aliquid reprehenderit eveniet quidem fugit pariatur! Architecto sint doloribus nihil excepturi voluptas, minima dolor dolorum!</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
};

export default postCard;