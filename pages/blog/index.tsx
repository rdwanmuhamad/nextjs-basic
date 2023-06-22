import Layout from '@/components/Layout'
import React from 'react'
import styles from './blog.module.css'


interface Post{
  id: number,
  title: string,
  body: string
}
interface DataBlogProps {
  dataBlog: Post[];
}

export default function Blog(props: DataBlogProps) {
  const {dataBlog} = props;
  return (
    <Layout pageTitle="Blog Page">
      <div>Blog page</div>
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <p>{blog.title}</p>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json();

  return{
    props: {
      dataBlog
    }
  }
  
}
