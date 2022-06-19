import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../../styles/post/post.module.scss';
import {asText} from '@prismicio/helpers';
import { createClient } from '../../services/prismic';

type Post = {
  slug: string;
  title: string;
  excerpet: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({posts}: PostsProps){
  return(
    <>
      <Head>
        <title>Posts Physio App</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <a key={post.slug} href='#'>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpet}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const client = createClient();

  const response = await client.getAllByType("postId", {
    fetch:['postId.title', 'postId.content'],
    pageSize: 100,
  })

  //console.log(`posts: ${response.map(post => JSON.stringify(post,null,2))}`);

  const posts = response.map(post => {
    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpet: post.data.content.find(content => content.type === 'preformatted')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}
