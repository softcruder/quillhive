"use client"
import React, { useState } from 'react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/AppHeader.module.scss';

interface HeaderProps {
  logo: string;
  pathToProfilePicture: string;
}

const Header: React.FC<HeaderProps> = ({ logo, pathToProfilePicture }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} width="48" height="24" alt="App Logo" />
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
            src={pathToProfilePicture}
            alt="Profile Picture"
            width="32"
            height="32"
          />
          <FiChevronDown className={styles.dropdownIcon} />
        </button>
        {isProfileMenuOpen && (
          <div className={styles.profileMenu}>
            <ul>
                <li>
                    <span>Account</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Log out</span>
                </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
