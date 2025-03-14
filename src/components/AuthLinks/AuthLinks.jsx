import React from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  //temporary
  const status = "notautheticated";
  return (
    <>
      {status === "notautheticated" ? (
        <Link href='/login'>Login</Link>
      ) : (
        <>
          <Link href='/newProject'>Novo</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
