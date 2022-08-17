import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from './header'
import Main from './main'
import Profile from './profile'
import RightBar from './rightBar'

export default function Home() {
  return (
    <>
    <Header/>
  <div className='lg:flex justify-around'>
  <Main/>
  <RightBar/>
  </div>
  <Profile/>
    </>
  )
}
