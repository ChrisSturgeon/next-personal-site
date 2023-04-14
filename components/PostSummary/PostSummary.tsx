import styles from './PostSummary.module.css';
import Link from 'next/link';
import Date from '../Date/Date';
import { motion } from 'framer-motion';

interface postProps {
  post: {
    date: string;
    title: string;
    summary: string;
    id: string;
  };
}

export default function PostSummary({ post }: postProps) {
  return (
    <motion.li
      className={styles.postSummary}
      whileHover={{ x: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <Link href={`/blog/${post.id}`}>
        <h2>{post.title}</h2>
        <Date dateString={post.date} />
        <p>{post.summary}</p>
      </Link>
    </motion.li>
  );
}
