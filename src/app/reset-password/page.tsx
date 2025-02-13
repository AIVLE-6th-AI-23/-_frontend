'use client';

import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { verifyUser, resetPassword } from '@/services/user';
import { motion } from 'framer-motion';
import * as styles from './resetPassword.css';
import Select from 'react-select';
import { DepartmentOptions } from '@/constants/constants';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [step, setStep] = useState(token ? 2 : 1);
  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const { mutate: verifyUserMutate, isPending: isVerifying } = useMutation({
    mutationFn: () => verifyUser({ employeeId, deptId: department, email }),
    onSuccess: (isVerified) => {
      if (isVerified) {
        setStep(2);
      } else {
        setError('사용자 정보가 올바르지 않습니다.');
      }
    },
  });

  const { mutate: resetPasswordMutate, isPending: isResetting } = useMutation({
    mutationFn: () => resetPassword(token as string, newPassword),
    onSuccess: () => {
      alert('비밀번호가 성공적으로 변경되었습니다. 로그인 페이지로 이동합니다.');
      router.push('/login');
    },
  });

  const handleVerifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    verifyUserMutate();
  };

  const handleResetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetPasswordMutate();
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.resetBox}
      >
        <h1 className={styles.title}>비밀번호 재설정</h1>

        {error && <p className={styles.error}>{error}</p>}

        {step === 1 && (
          <motion.form 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleVerifySubmit}
          >
            <input
              type="text"
              placeholder="사원 번호"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
              className={styles.input}
            />
            <Select 
              options={DepartmentOptions} 
              className={styles.input} 
              placeholder="부서 선택" 
              onChange={(selectedOption) => setDepartment(selectedOption?.value || '')}
              isClearable
            />
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" disabled={isVerifying} className={styles.button}>
              {isVerifying ? '확인 중...' : '확인'}
            </button>
          </motion.form>
        )}

        {step === 2 && !token && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.message}
          >
            비밀번호 재설정 메일이 전송되었습니다. 이메일을 확인해주세요.
          </motion.p>
        )}

        {step === 2 && token && (
          <motion.form 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleResetSubmit}
          >
            <input
              type="password"
              placeholder="새로운 비밀번호"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={styles.input}
            />
            <button type="submit" disabled={isResetting} className={styles.button}>
              {isResetting ? '비밀번호 변경 중...' : '비밀번호 변경'}
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}
