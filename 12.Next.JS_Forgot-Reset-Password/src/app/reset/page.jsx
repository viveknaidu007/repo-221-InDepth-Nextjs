"use client"

import { useState } from "react"
import { resetEmailAction } from "../serverActions/resetEmailAction"


const EmailPage = () => {
    const [email, setEmail] = useState("")

    const emailHandler = async(e)=>{
        e.preventDefault()
        console.log("email:", email)
        await resetEmailAction(email)
    }

  return (
    <div className='formContainer'>
      <form className='formSection' onSubmit={emailHandler}>
        <h3>Enter your email</h3>
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default EmailPage
