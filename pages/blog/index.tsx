import Link from 'next/link';
import styles from '@/styles/BlogIndex.module.css';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '@/components/Date/Date';

interface allPostsProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Blog({ allPostsData }: allPostsProps) {
  return (
    <>
      <Head>
        <title>Chris Sturgeon Blog</title>
      </Head>
      <div className={styles.wrapper}>
        <div>
          <h1>Blog</h1>
          <p>
            Welcome to my blog. My aim is to write about all things related to
            coding. Posts could be JavaScript specific, general programming
            concepts, career development, or anything else that happens to pop
            into my brain.
          </p>
          <p>Check out these recent posts:</p>
          <ul>
            {allPostsData.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={`/blog/${post.id}`}>
                    <div>
                      <span>{post.title}</span> posted{' '}
                      <Date dateString={post.date} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
