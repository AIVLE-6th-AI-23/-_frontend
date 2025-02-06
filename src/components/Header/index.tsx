import React from "react"; 
import Link from "next/link";
import * as styles from "./header.css"; // ✅ 스타일 파일 import
import UserProfile from "./UserProfile";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Logo />
                <Navbar />
                <UserProfile />
            </div>
        </div>
    );
};

export default Header;
