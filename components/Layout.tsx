import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import Navbar from './Navbar/Navbat';

const variants = {
  initialState: {
    opacity: 0,
    x: -200,
    y: 0,
  },
  animateState: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exitState: {
    opacity: 0,
    x: 0,
    y: 100,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      }}
      className={inter.className}
    >
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: '0.4',
          }}
          variants={variants}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <div>I'm the footer</div>
    </div>
  );
}
