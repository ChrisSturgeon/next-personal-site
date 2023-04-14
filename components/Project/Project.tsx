import { motion } from 'framer-motion';
import styles from './Project.module.css';

interface ProjectProps {
  project: {
    name: string;
    screenshot: string;
    about: string;
    challenges: string[];
    live: string;
    repo: string;
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
      <p> {project.about}</p>
      <img src={project.screenshot}></img>
      <div className="content">
        <p>Challenges overcome included:</p>
        {project.challenges && (
          <ul>
            {project.challenges.map((challenge) => {
              return <li key={challenge}>{challenge}</li>;
            })}
          </ul>
        )}
        <div className={styles.links}>
          <a href={project.live} target="__blank">
            View Live
          </a>
          <a href={project.repo} target="__blank">
            View Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
