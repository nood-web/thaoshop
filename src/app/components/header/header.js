import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

const Header = ()  =>  {
  return (
  <header className={styles.header}>  
  <div className={styles.logo}> 
    <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
  </div> 
  </header>  
  )
}
export default Header ;