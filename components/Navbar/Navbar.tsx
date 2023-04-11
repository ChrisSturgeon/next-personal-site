import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

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
  const router = useRouter();
  const currentPath = router.pathname;

  // useEffect(() => {
  //   console.log(router.pathname);
  // }, []);

  function toggleNav() {
    setShowMobile(!showMobile);
  }

  return (
    <nav className={styles.wrapper}>
      <Link href="/">Chris Sturgeon</Link>
      <div className={styles.barLinks}>
        <Link
          href="/"
          className={currentPath === '/' ? styles.active : undefined}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={currentPath === '/about' ? styles.active : undefined}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={currentPath === '/projects' ? styles.active : undefined}
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className={currentPath === '/blog' ? styles.active : undefined}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={currentPath === '/contact' ? styles.active : undefined}
        >
          Contact
        </Link>
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
