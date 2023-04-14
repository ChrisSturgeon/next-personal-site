import styles from '@/styles/BlogIndex.module.css';
import { getSortedPostsData } from '@/lib/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PostSummary from '@/components/PostSummary/PostSummary';

interface allPostsProps {
  allPostsData: {
    date: string;
    title: string;
    summary: string;
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
        <title>Chris Sturgeon - Blog</title>
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
              return <PostSummary post={post} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
