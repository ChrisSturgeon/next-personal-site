import styles from '@/styles/Projects.module.css';
import { projectsData } from '@/projects';
import Project from '@/components/Project/Project';
import { AnimatePresence } from 'framer-motion';

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.column}>
          {projectsData.map((project, index) => {
            if (index === 0) {
              return (
                <AnimatePresence initial={false}>
                  <Project key={project.about} project={project} />;
                </AnimatePresence>
              );
            } else {
              return <Project key={project.about} project={project} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
