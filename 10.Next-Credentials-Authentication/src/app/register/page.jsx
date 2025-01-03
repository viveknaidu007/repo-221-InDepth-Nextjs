"use client"

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerAction'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

const router = useRouter()


  const registerHandler = async(e)=>{
        e.preventDefault();
        const registerDetails = {username, email, password}
        console.log("this is register detials", registerDetails)
        try {
          await registerAction(registerDetails)
          router.push("/login")
          alert("User Registered successfully")
        } catch (error) {
              setError(error.message)
        }
      
  }

  return (
    <div className='formContainer'>
      <h1>Register Form</h1>
      <form className='formSection' onSubmit={registerHandler}>
        {error && <p style={{color:'red'}}>{error}</p>}
        <h3>Username</h3>
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
        <h3>Email</h3>
        <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Password</h3>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <button type='submit'>Register</button>
        <Link href="/login">
          Already Registered? Login
        </Link>
      </form>

    </div>
  )
}

export default RegisterPage
