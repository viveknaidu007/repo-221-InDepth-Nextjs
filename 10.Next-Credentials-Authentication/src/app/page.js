

import React from 'react'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const HomePage = async() => {

  const session = await auth()

  if(!session){
    return redirect("/login")
  }

  return (
    <div>
      <h1>Welcome to Next auth credetial authentication</h1>
      <Link href="/api/auth/signout">
      Logout
      </Link>
    </div>
  )
}

export default HomePage
