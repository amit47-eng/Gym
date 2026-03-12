'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.logoAccent}>IRON</span>CORE
      </div>
      
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/products" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Products</Link>
        <Link href="/company" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Company</Link>
        <Link href="/our-work" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Our Work</Link>
        <button className={`${styles.contactBtn} ${styles.mobileContactBtn}`}>Contact Us</button>
      </nav>

      <div className={styles.actions}>
        <button className={styles.searchBtn} aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button className={`${styles.contactBtn} ${styles.desktopContactBtn}`}>Contact Us</button>
        
        <button className={styles.hamburgerBtn} onClick={toggleMobileMenu} aria-label="Menu">
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line1Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line2Open : ''}`}></div>
          <div className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line3Open : ''}`}></div>
        </button>
      </div>
    </header>
  );
}
