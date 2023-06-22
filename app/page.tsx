import Image from 'next/image'
import styles from './styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <main>
      <Layout pageTitle=''>
        <h1 className={styles["title-homepage"]}>Halo, Muhamad Ridwan</h1>
      </Layout>
    </main>
  );
}
