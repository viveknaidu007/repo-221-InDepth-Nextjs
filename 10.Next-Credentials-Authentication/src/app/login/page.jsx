
"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginAction'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const loginHandler = async(e)=>{
        e.preventDefault()
        const loginDetails = {email, password}
        console.log(loginDetails)
      try {
        const response = await loginAction(loginDetails)
    
        if(response.success){
          router.push("/")
        }else{
          setError("login failed, please try againe")
        }
      } catch (error) {
          setError(error.message)
      }

    }

  return (
    <div className='formContainer'>
        <h1>Login Form</h1>

        <form className='formSection' onSubmit={loginHandler}>
      {error && <p style={{color:'red'}}>{error}</p>}
        <h3>Email</h3>
        <input type="email" name="email"  onChange={(e)=>setEmail(e.target.value)}/>
        <h3>Password</h3>
        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <button type='submit'>Login</button>
        <Link href="/register">
          Not Resistered? Signup
        </Link>
        </form>
      
    </div>
  )
}

export default LoginForm
