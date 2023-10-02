import React from 'react'
import { rmvpreview } from '../assets';

function About() {
  return (
    <div className='bg-bg h-[70vh] flex'>
        <div className='flex-1'>
            <img src={rmvpreview} alt="headset" className='h-[90vh] object-contain'/>
        </div >
        <div className='flex-1'> right </div>
    </div>
  )
}

export default About