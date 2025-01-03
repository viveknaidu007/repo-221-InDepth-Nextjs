

import React from 'react'
import {auth} from './auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const LandingPage = async() => {

  const session = await auth()

  if(!session){
    redirect("api/auth/signin")
  }

  return (
    <div>
      <h1>Welcome to My Application</h1>
      <Link href="/api/auth/signout">
      <button style={{background:'red', width:"5rem", height:'2rem', color:'white'}}>Logout</button>
      </Link>
    </div>
  )
}

export default LandingPage
