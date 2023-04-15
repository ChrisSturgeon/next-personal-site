import styles from '@/styles/Post.module.css';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '@/components/Date/Date';

interface postProps {
  postData: {
    title: string;
    id: string;
    date: string;
    summary: string;
    contentHTML: string;
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return {
    props: {
      postData,
    },
  };
};

export default function Post({ postData }: postProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.summary}></meta>
      </Head>
      <div className={styles.postWrapper}>
        <article className={styles.post}>
          <h1>{postData.title}</h1>
          <Date dateString={postData.date} />
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
            className={styles.post}
          ></div>
        </article>
      </div>
    </>
  );
}
