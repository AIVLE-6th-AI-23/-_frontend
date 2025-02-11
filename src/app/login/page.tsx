'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login } from '@/services/user';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './login.css';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: loginMutate, isPending: isLoggingIn, error: loginError } = useMutation({
    mutationFn: (data: { userId: string; password: string }) => login({ employeeId: data.userId, password: data.password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      router.push('/boards');
    },
  });

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutate({ userId, password });
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.loginBox}
      >
        <h1 className={styles.title}>로그인</h1>
        {loginError && <p className={styles.error}>로그인 실패</p>}
        
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.form 
              key="step1"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleNextStep}
            >
              <div className={styles.inputButtonContainer}>
                <input 
                  name="userId" 
                  type="text"
                  placeholder="사원 번호를 입력하세요" 
                  required 
                  className={styles.input} 
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <button type="submit" className={styles.button}>
                  다음
                </button>
              </div>  
              <p className={styles.signupLink}>계정이 없으신가요? <Link href="/signup" className={styles.link}>회원가입</Link></p>
            </motion.form>
          ) : (
            <motion.form 
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={styles.userIdDisplay}
              >
                {userId}
              </motion.p>
              <input 
                name="password" 
                type="password" 
                placeholder="비밀번호 입력" 
                required 
                className={styles.input} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" disabled={isLoggingIn} className={styles.button}>
                {isLoggingIn ? "로그인 중..." : "로그인"}
              </button>
              <button type="button" className={styles.backButton} onClick={() => setStep(1)}>
                다른 계정으로 로그인
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
