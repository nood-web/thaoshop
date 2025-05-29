import Image from "next/image"; 
import styles from "./page.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/Nav/nav";
import Maincontent from "./components/Maincontent/maincontent"

export default function Home() { 
  return ( 
    <div className={styles.content }>
      <Header/>
      <Nav/>
      <Maincontent/>
      <Footer/>
     </div> 
  ); 
}