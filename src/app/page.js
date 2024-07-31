import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import background from '../../public/images/background1.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/reservas">Reservas</Link>
      <Link href="/creditos">Creditos</Link>
      <Image src={background}/>
    </main>
  );
}
