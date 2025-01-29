"use client"

import React from "react";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import * as styles from "./auth.css";

export default function AuthContainer() {
  return (
    <div className={styles.mainContainer}>
      <input type="checkbox" id="chk" aria-hidden="true" />
      <Signup />
      <Login />
    </div>
  );
}
