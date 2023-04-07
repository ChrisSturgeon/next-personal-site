import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Project.module.css';

interface ProjectProps {
  project: {
    name: string;
    screenshot: string;
    about: string;
    challenges: string[];
  };
}

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Project({ project }: ProjectProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={styles.project}
    >
      <h2>{project.name}</h2>
      <div className={styles.imageWrapper}></div>
      <img src={project.screenshot}></img>
      <div className="content">
        <p> {project.about}</p>
        <p>Challenges overcome include:</p>
        {project.challenges && (
          <ul>
            {project.challenges.map((challenge) => {
              return <li key={challenge}>{challenge}</li>;
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
