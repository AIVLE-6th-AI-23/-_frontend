'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // ✅ Next.js 13+ 네비게이션 훅
import * as styles from './login.css';
import { login } from '@/services/auth';

export default function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const redirectUrl = searchParams.get('redirect') || '/boards';

  const handleLogin = async () => {
    try {
      await login(userId, password);
      console.log('Login successful');
      router.push(redirectUrl);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.button}>Login</button>
      </div>
    </main>
  );
}