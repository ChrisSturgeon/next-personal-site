import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const slideOut = {
  hidden: {
    x: '200vw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: '200vw',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);

  function toggleNav() {
    setShowMobile(!showMobile);
  }

  return (
    <nav className={styles.wrapper}>
      <Link href="/">Chris Sturgeon</Link>
      <div className={styles.barLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button onClick={toggleNav}>M</button>
      <AnimatePresence>
        {showMobile && (
          <motion.div
            className={styles.mobile}
            variants={slideOut}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link href="/" onClick={toggleNav}>
              Home
            </Link>
            <Link href="/about" onClick={toggleNav}>
              About
            </Link>
            <Link href="/projects" onClick={toggleNav}>
              Projects
            </Link>
            <Link href="/blog" onClick={toggleNav}>
              Blog
            </Link>
            <Link href="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
