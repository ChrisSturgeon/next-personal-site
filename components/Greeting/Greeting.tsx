import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Greeting.module.css';

export default function Greeting() {
  return (
    <AnimatePresence>
      <div className={styles.greeting}>
        <h1>Hello!</h1>
      </div>
    </AnimatePresence>
  );
}
