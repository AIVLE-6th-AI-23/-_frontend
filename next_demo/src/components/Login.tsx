import React, { useState } from 'react';
import { login } from '@/services/userApi';
import { LoginRequest } from '@/types/auth';
import * as styles from '@/containers/auth.css';

export default function Login() {
  const [formData, setFormData] = useState<LoginRequest>({
    employeeId: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      alert('로그인 성공!');
    } catch (error) {
      console.error(error);
      alert('로그인 실패. 다시 시도해주세요.');
    }
  };

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.formGroup}>
        <label className={styles.label}>Login</label>
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
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
