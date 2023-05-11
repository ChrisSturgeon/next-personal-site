import styles from '@/styles/About.module.css';
import Head from 'next/head';
import Skills from '@/components/Skills/Skills';

export default function About() {
  return (
    <>
      <Head>
        <meta name="description" content="Chris Sturgeon - About" />
        <title>Chris Sturgeon - About</title>
      </Head>
      <div className={styles.wrapper}>
        <div>
          <h1>About Me</h1>
          <h2>Bio</h2>
          <p>
            Hi! I'm Chris, a front end web developer based in the south east of
            England. My journey to web development started when I discovered
            that building some basic CRUD sites with Django scratched my
            creative itch. I subsequently launched myself head-first into
            Vanilla JavaScript before moving on to React and Express. I enjoy
            learning new frameworks and tools, and am currently focusing on
            learning TypeScript along with accessibility and testing best
            practices.
          </p>
          <p>
            Outside of web development I enjoy windsurfing, paddleboarding,
            running and hiking.
          </p>
          <Skills />
        </div>
      </div>
    </>
  );
}
