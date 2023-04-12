import Link from 'next/link';

import { getSortedPostsData } from '@/lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface allPostsProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

export default function Blog({ allPostsData }: allPostsProps) {
  return (
    <div>
      <h1>
        <ul>
          {allPostsData.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                <p>{post.id}</p>
                <p>{post.date}</p>
              </li>
            );
          })}
        </ul>
      </h1>
    </div>
  );
}
