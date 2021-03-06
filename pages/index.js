import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/eventTable'
import Maps from '../components/googleMap'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Morgan's Indy Events</title>
        <meta name="description" content="Displaying details of upcoming events in Indianapolis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{color: "blue"}} className={styles.title}>
          Indianapolis Events
        </h1> 

        <p className={styles.description}>
          Things to do in Indianapolis around May 19th, 2022
        </p>
        <Table/>
        <p/>
        <Maps/> 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
