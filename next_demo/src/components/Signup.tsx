import React, { useState } from 'react';
import { signup } from '@/services/userApi';
import { SignUpRequest } from '@/types/auth';
import * as styles from '@/containers/auth.css';

export default function Signup() {
  const [formData, setFormData] = useState<SignUpRequest>({
    employeeId: '',
    userName: '',
    email: '',
    password: '',
    deptId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'deptId' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert('회원가입 성공!');
    } catch (error) {
      console.error(error);
      alert('회원가입 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.formGroup}>
        <label className={styles.label}>Sign up</label>
        <input
          className={styles.input}
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="userName"
          placeholder="User Name"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="deptId"
          placeholder="Department ID"
          value={formData.deptId}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Sign up
        </button>
      </form>
    </div>
  );
}
