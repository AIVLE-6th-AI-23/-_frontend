import React from "react"; 
import * as styles from "./header.css";
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
