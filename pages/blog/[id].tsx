import { getAllPostIds, getPostData } from '@/lib/posts';
import styles from '@/styles/Post.module.css';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className={styles.postWrapper}>
      <article className={styles.post}>
        <h2>{postData.title}</h2>
        <p>{postData.id}</p>
        <p>{postData.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
          className={styles.post}
        ></div>
      </article>
    </div>
  );
}
