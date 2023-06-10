import React, { useState } from 'react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="App Logo" />
      </div>
      <div className={styles.searchBar}>
        {/* Add your search bar component here */}
      </div>
      <div className={styles.userPanel}>
        <button className={styles.notificationIcon}>
          <FiBell />
        </button>
        <button className={styles.profileButton} onClick={toggleProfileMenu}>
          <Image
            className={styles.profilePicture}
            src="/path/to/profile-picture.png"
            alt="Profile Picture"
          />
          <FiChevronDown className={styles.dropdownIcon} />
        </button>
        {isProfileMenuOpen && (
          <div className={styles.profileMenu}>
            {/* Add your profile menu items here */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
