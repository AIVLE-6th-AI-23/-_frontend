import Link from 'next/link';
import * as styles from "./navbar.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navItem}>홈</Link></li>
            <li><Link href="/boards" className={styles.navItem}>대시보드</Link></li>
        </ul>
    </nav>
  );
}