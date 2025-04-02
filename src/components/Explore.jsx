import styles from '@/constants/styles'
import React from 'react'
import TitleText from './TitleText'

const Explore = () => {
  return <section className='px-6 py-10'>
    <div className={`${styles.innerWidth} mx-auto flex-col`}>
      <TitleText 
      title={
        <span className='text-gray-900 font-extrabold'>
          Why Ride With Us?
        </span>
      }
      >

    </div>

  </section>
  
  
}

export default Explore
