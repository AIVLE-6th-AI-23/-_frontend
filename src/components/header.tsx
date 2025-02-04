import React from "react";
import Link from "next/link";

interface HeaderProps {
  userName: string;
  profileImg: string;
}

const Header: React.FC<HeaderProps> = ({ userName, profileImg }) => {
  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 */}
        <div className="logo">
          <Link href="/">
            <img src="/images/global/NERO_logo1.png" alt="Nero Logo" className="logo-img" />
          </Link>
        </div>

        {/* 네비게이션 바 */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/project">Project</Link></li>
          </ul>
        </nav>

        {/* 사용자 프로필 */}
        <div className="user-profile">
          <span className="user-name">{userName}</span>
          <img src={profileImg} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
