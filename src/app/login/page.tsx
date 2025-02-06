'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { login } from '@/services/auth';
import * as styles from './login.css';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/boards';
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: { userId: string; password: string }) => login({ employeeId: data.userId, password: data.password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      router.push(redirectUrl);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId") as string;
    const password = formData.get("password") as string;
    mutate({ userId, password });
  };

  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.error}>로그인 실패</p>}
        
        <form onSubmit={handleSubmit}>
          <input name="userId" placeholder="아이디" required className={styles.input} />
          <input name="password" type="password" placeholder="비밀번호" required className={styles.input} />
          <button type="submit" disabled={isPending} className={styles.button}>
            {isPending ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </main>
  );
}
