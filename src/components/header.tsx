import React from "react";

interface HeaderProps {
  userName: string;
  profileImg: string;
}

const Header: React.FC<HeaderProps> = ({ userName, profileImg }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src="/images/global/NERO_logo1.png" alt="Nero Logo" className="logo-img" />
        </a>
      </div>
      <div className="user-profile">
        <span className="user-name">{userName}</span>
        <img src={profileImg} alt="Profile" className="profile-pic" />
      </div>
    </header>
  );
};

export default Header;
