import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function footer() {
  return (
    <div className=' justify-center items-center w-full'>
        <footer className={''}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <span className={styles.logo}>
            themanjman
          </span>
        </a>
      </footer> 
    </div>
  )
}

export default footer