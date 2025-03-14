"use client";

import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //temporary
  const status = "notautheticated";
  return (
    <>
      {status === "notautheticated" ? (
        <Link href='/login' className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href='/newProject' className={styles.link}>Novo</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Início</Link>
          <Link href='/'>Sobre</Link>
          <Link href='/'>Análise</Link>

          {status === "notautheticated" ? (
            <Link href='/login'>Login</Link>
          ) : (
            <>
              <Link href='/newProject'>Novo</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
