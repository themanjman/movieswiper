import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swiper from '../components/swiper'
import getMovies from '../hooks/getData'

export default function Home() {

  const { serverError, apiData } = getMovies();

 // console.log(apiData); 


  return (
    <div className='flex flex-col min-h-screen place-items-center items-center text-center'>
      <Head>
        <title>movieSwiper</title>
        <meta name="description" content="Find your next show or movie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='m-auto '>
          <h1 className={`${styles.title} justify-center items-center`}>
            Welcome to movieSwiper
          </h1>
        


        <Swiper></Swiper>


      </div>

      {/* <footer className={styles.footer}>
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
      </footer>  */}


    </div>
  )
}
