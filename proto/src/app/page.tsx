import * as styles from './home.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to the Application</h1>
        <p className={styles.subtitle}>This is the starting page of your app.</p>
      </div>
    </main>
  );
}