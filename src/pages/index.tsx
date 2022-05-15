import Head from 'next/head';
import { Header } from '../components/Header';
import styles from '../styles/home/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Physio App</title>
      </Head>
      <Header />
        <main className={styles.contentContainer}>
          <section className={styles.contentText}>
            <span>👏 Olá, bem vindo</span>
            <h1>Sistema para gestão de clínicas de <span>Fisioterapia</span>.</h1>
            <p>
              Acesse as funcionalidades e descubra <br />
              <span>todas as facilidades de gestão.</span>
            </p>
          </section>

          <img src="/images/home.png" alt="Physio App" />
        </main>
    </>
  )
}
