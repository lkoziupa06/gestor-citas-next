import Link from 'next/link';
import styles from './navbar.module.css'
export const Navbar = () =>{
    return(
        <header className={styles.navbar}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/reservas">Reservas</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/creditos">Creditos</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}