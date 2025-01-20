"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const Authentication: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (pass: string, confirmPass: string) => {
    if (pass === confirmPass) {
      setPasswordMessage("비밀번호가 일치합니다.");
    } else {
      setPasswordMessage("비밀번호가 일치하지 않습니다.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 010-****-**** 패턴
    setPhoneNumber(value);

    if (!phoneRegex.test(value) && value !== "") {
      alert("전화번호 형식을 확인하세요.");
    } else {
      setPhoneError("");
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 방지

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (phoneError) {
      alert("전화번호 형식을 확인하세요.");
      return;
    }

    alert("회원가입이 완료되었습니다!");
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 방지
    alert("로그인 시도 중...");
  };

  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <input type="checkbox" id="chk" style={{ display: "none" }} aria-hidden="true" />
        <div className={styles.signup}>
          <form onSubmit={handleSignUpSubmit}>
            <label htmlFor="chk" className={styles.label} aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required className={styles.input} />
            <input type="email" name="email" placeholder="Email" required className={styles.input} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (010-****-****)"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              className={styles.input}
            />
            <div className={styles.input}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="pswd"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <input
              type="password"
              id="confirm-password"
              name="confirm-pswd"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className={styles.input}
            />
            <div
              className={
                passwordMessage === "비밀번호가 일치합니다."
                  ? styles.validMessage
                  : styles.invalidMessage
              }
            >
              {passwordMessage}
            </div>
            <button type="submit" className={styles.button}>
              Sign up
            </button>
          </form>
        </div>
        <div className={styles.login}>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="chk" className={styles.label} aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required className={styles.input} />
            <input type="password" name="pswd" placeholder="Password" required className={styles.input} />
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
