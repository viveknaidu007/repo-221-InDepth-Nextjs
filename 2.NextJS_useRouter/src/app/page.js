
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const page = () => {
  const [user, setUser] = useState(true)

  const router = useRouter()

  console.log("checking for router properties", router)

  const userHandler =()=>{
      if(user){
            router.push('/dashboard')
      }else{
        router.push('/login')
      }
  }

  return (
    <div align='center'>
      <h1 >Welcome to Next JS 14</h1>
      <button onClick ={userHandler}>Login</button>
    </div>
  )
}

export default page
