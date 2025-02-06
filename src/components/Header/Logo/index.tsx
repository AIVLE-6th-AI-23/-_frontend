import Link from 'next/link';
import * as styles from "@/components/Header/header.css"

export default function Logo() {
  return (
    <div className={styles.logo}>
        <Link href="/">
            <img src="/images/NERO_logo1.png" alt="Nero Logo" className={styles.logoImg} />
        </Link>
    </div>
  );
}