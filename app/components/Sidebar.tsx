'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { RiDashboardFill, RiSettingsFill, RiUserFill } from 'react-icons/ri';
import styles from '../styles/Sidebar.module.scss';

interface SidebarProps {
  logo: string;
}

const Sidebar: React.FC<SidebarProps> = ({ logo }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="App Logo" />
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <FiArrowLeft />
        </button>
      </div>
      <nav className={styles.nav}>
        <span>Overview</span>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/" legacyBehavior>
              <a className={styles.a}>
                <RiDashboardFill className={styles.icon} />
                {isExpanded && <span>Feed</span>}
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/users" legacyBehavior>
              <a className={styles.a}>
                <RiUserFill className={styles.icon} />
                {isExpanded && <span>Bookmarks</span>}
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/settings" legacyBehavior>
              <a className={styles.a}>
                <RiSettingsFill className={styles.icon} />
                {isExpanded && <span>Drafts</span>}
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/settings" legacyBehavior>
              <a className={styles.a}>
                <RiSettingsFill className={styles.icon} />
                {isExpanded && <span>Analytics</span>}
              </a>
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;