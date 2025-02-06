import Link from 'next/link';
import * as styles from "@/components/Header/header.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navItem}>HOME</Link></li>
            <li><Link href="/boards" className={styles.navItem}>BOARD</Link></li>
        </ul>
    </nav>
  );
}