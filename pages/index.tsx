import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
const inter = Inter({ subsets: ['latin'] });

const popUp = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.5,
      delay: 0.9,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Sturgeon</title>
        <meta
          name="description"
          content="Chris Sturgeon - Front End Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <motion.div className={styles.wrapper} initial={true}>
          <div className={styles.content}>
            <motion.div variants={popUp} initial="offscreen" animate="onscreen">
              <motion.h1>Hello!</motion.h1>
              <p>I'm Chris Sturgeon. A front end developer from the UK.</p>
            </motion.div>
            <motion.nav variants={popUp} initial="offscreen" animate="onscreen">
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </motion.nav>
            <div className={styles.headshotWrapper}>
              <Image
                src={'/imgs/headshot-modified.png'}
                fill={true}
                alt="Chris Sturgeon Headshot"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                placeholder="blur"
                blurDataURL={'/imgs/headshot-modified.png'}
              />
            </div>
          </div>
          <motion.div
            className={styles.background}
            transition={{ delay: 0.4 }}
            animate={{ left: '0vw' }}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
