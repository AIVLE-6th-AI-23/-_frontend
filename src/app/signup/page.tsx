'use client';

import { queryOptions, useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';
import { checkId, signup } from '@/services/user';
import * as styles from './signup.css';
import { useRouter } from 'next/navigation';
import { DepartmentOptions } from '@/constants/constants';

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [employeeId, setEmployeeId] = useState('');
  const [deptId, setDeptId] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkIdValid, setCheckIdValid] = useState(true)

  const router = useRouter();
  const { mutate: signupMutate, isPending: isSigningUp, error: signupError } = useMutation({
    mutationFn: (data: { employeeId: string; userName: string; email: string; password: string; deptId: string }) => 
      signup(data),
    onSuccess: () => {
        router.push('/login');
    },
  });

  const handleNextStep = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1 && employeeId && deptId) {
      try {
        const response = await checkId(employeeId);
        setCheckIdValid(!response);
        if (!response) setStep(2);
      } catch (error) {
        setCheckIdValid(false);
      }
    } else if (step === 2 && userName && email) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupMutate({ employeeId, userName, email, password, deptId });
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.signupBox}
      >
        <h1 className={styles.title}>회원가입</h1>
        {signupError && <p className={styles.error}>회원가입 실패</p>}
        {!checkIdValid && <p className={styles.error}>이미 가입된 회원입니다.</p>}
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
                <input name="employeeId" placeholder="사원 번호" required className={styles.input} value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                <Select 
                  options={DepartmentOptions} 
                  className={styles.input} 
                  placeholder="부서 선택" 
                  onChange={(selectedOption) => setDeptId(selectedOption?.value || '')}
                  isClearable
                />
                <button type="submit" className={styles.button}>
                  다음
                </button>
              </div>
            </motion.form>
          ) : step === 2 ? (
            <motion.form 
              key="step2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleNextStep}
            >
              <input name="userName" placeholder="이름" required className={styles.input} value={userName} onChange={(e) => setUserName(e.target.value)} />
              <input name="email" type="email" placeholder="이메일" required className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className={styles.button}>다음</button>
            </motion.form>
          ) : (
            <motion.form 
              key="step3"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
            >
              <input name="password" type="password" placeholder="비밀번호" required className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" disabled={isSigningUp} className={styles.button}>{isSigningUp ? "회원가입 중..." : "회원가입"}</button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
