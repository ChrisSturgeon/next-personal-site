import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>About Me</h1>
        <h2>Bio</h2>
        <p>
          Hi! I'm Chris, a front end web developer based in the south east of
          England. My journey to web development started when I discovered that
          building some basic CRUD sites with Django scratched my creative itch.
          I subsequently launched myself head-first into Vanilla JavaScript
          before moving on to React and Express. I enjoy learning new frameworks
          and tools, and am currently focusing on learning TypeScript along with
          accessibility and testing best practices.
        </p>
        <p>
          Outside of web development I enjoy windsurfing, paddleboarding,
          running and hiking.
        </p>

        <div className={styles.skills}>
          <div>
            <h2>
              Languages <span>&</span> Frameworks
            </h2>
            <ul>
              <li>JavaScript & TypeScript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Express</li>
              <li>HTML</li>
              <li>CSS & SCSS</li>
              <li>Styled Components & Bootstrap</li>
            </ul>
          </div>

          <div>
            <h2>
              Development <span>&</span> Tools
            </h2>
            <ul>
              <li>Webpack</li>
              <li>npm</li>
              <li>Git</li>
              <li>Firebase</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>MongoDB & Mongoose</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
