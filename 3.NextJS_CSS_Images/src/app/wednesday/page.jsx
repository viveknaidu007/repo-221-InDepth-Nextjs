

import React from 'react'
import wednesday from './wednesday.module.css'
import Image from 'next/image'

import man from '../../../public/happy.jpg'


const page = () => {
  return (
    <div>
        <h1 className={wednesday.apple}>Today is Wedneday</h1>

        {/* <img src='happy.jpg' width={500} height={500}/> */}
        <hr />

        <Image src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg"
         width={800} height={800} />

    </div>
  )
}

export default page
