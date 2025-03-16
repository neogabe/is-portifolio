import React from 'react';
import styles from './Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Olá, meu querido(a)!</b>
        Veja o nosso portifólio de integrações aqui.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            quaerat rerum nam reprehenderit fuga expedita tenetur excepturi quis
            neque, maiores doloribus exercitationem officia animi architecto
            omnis beatae ratione quasi voluptatibus?
          </p>
          <button className={styles.button}></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
