import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'
import background from '../../public/images/background1.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Bienvenido a la Página Principal</h1>
      <div className={styles.imageContainer}>
        <Image src={background} alt="Background Image" className={styles.backgroundImage}/>
      </div>
    </main>
  );
}
