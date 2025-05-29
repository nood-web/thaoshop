import React from "react";
import styles from "./nav.module.css";

const Nav = ()  => {
    return (
      <nav className={styles.nav}> 
      <ul>   
        <li><a href="#home">Trang chủ</a></li> 
        <li><a href="#cart">Giỏ Hàng</a></li> 
        <li><a href="#products">Sản phẩm</a></li> 
        <li><a href="#services">Dịch Vụ</a></li> 
        <li><a href="#contact">Liên Hệ</a></li>
      </ul> 
    </nav>
    )
  }
  export default Nav;   