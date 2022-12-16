import Head from 'next/head'
import HomeContents from '../components/home//HomeContents'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>       
      </Head>
    <main>
      <section>
        <HomeContents/>
      </section>
    </main>
    </div>
  )
}
