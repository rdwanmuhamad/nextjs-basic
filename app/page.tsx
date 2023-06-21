import Image from 'next/image'
import styles from './styles/Home.module.css';
import Header from '../components/Header/header';

export default function Home() {
  return (
    <main>
     <Header></Header>
     <h1 className={styles['title-homepage']}>Halo, Muhamad Ridwan</h1>
    </main>
  );
}
