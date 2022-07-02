import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swiper from '../components/swiper/swiper'
import Footer from '../components/footer'
import getMovies from '../hooks/getData'
import { useState } from 'react'

export default function Home() {

  const { serverError, apiData } = getMovies();
  const [bgColour, setbgColour] = useState(null);


  return (
    <>
      
        <div className={`${styles.app} app`}>
        <Head>
          <title>movieSwiper</title>
          <meta name="description" content="Find your next show or movie" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
     




        <div>
          <Swiper data={apiData}></Swiper>
        </div>

      </div>
      

      
       
      
      
  </>
)
}
