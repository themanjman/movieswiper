import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Swiper from '../components/swiper/swiper'
import Footer from '../components/footer'
import {getMovies} from '../hooks/getData'
import { useEffect, useState } from 'react'
import Switch from 'react-ios-switch';


export default function Home() {

  const [bgColour, setbgColour] = useState(null);
  const [checked, setChecked] = useState(false);
  const [content, setContent] = useState(null); 
  let { serverError, apiData } = getMovies(checked);

  




  return (
    <>
      
        <div className={`${styles.app} app`}>
        <Head>
          <title>movieSwiper</title>
          <meta name="description" content="Find your next show or movie" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='flex flex-row h-12 p-4 justify-end'>
          <span className='text-lg text-white pr-4'>Searching for {checked ? 'TV Shows' : 'Movies' } </span>
          <Switch
                checked={checked}
                onChange={checked => {setChecked(checked)}}
              />
        </div>


        <div className='flex flex-col justify-center items-center row h-[90vh]'>
        <span className='mb-32 text-6xl font-bold leading-6'>movieSwiper</span>
          <Swiper checked={checked} data={apiData}></Swiper>
        </div>


      <Footer></Footer>
      </div>
      

      
       
      
      
  </>
)
}
