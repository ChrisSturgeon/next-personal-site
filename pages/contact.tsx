import styles from '@/styles/Contact.module.css';
import Head from 'next/head';
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Chris Sturgeon - Contact</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Get in touch!</h1>
        <ul>
          <li>
            <a href="mailto:sturgeon.chris@gmail.com">
              sturgeon.chris@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/ChrisSturgeon" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/chris-sturgeon-36a74254/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ImageCarousel hasPriorityImage={true}></ImageCarousel>
      </div>
    </>
  );
}
