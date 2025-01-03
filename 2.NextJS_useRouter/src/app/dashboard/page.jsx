"use client"

import { useRouter } from "next/navigation"

const page = () => {

  const router = useRouter()

  return (
    <div align='center' style={{backgroundColor:'blue', height:'80px', color:'white'}}>
      <h1>Welcome to Dashboard</h1>
      <button onClick = {()=>router.back()}>Go Back</button>
    </div>
  )
}

export default page
