
"use client"

import { resetPasswordAction } from '@/app/serverActions/resetPasswordAction';
import React, { useState } from 'react'

const NewPassworPage = ({params}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const resetPasswordHandler = async(e)=>{
      e.preventDefault();
      const passwordDetails = {newPassword, confirmPassword}
        console.log(passwordDetails)
        if(newPassword !== confirmPassword){
          alert("confirm password not matched")
        
        }else{
          const token = params.token
          await resetPasswordAction(newPassword, token)
        }
  }

  return (
    <div className='formContainer'>
        <form className='formSection' onSubmit= {resetPasswordHandler}>
            <h3> Enter New Password</h3>
            <input type="text" name="newPassword" onChange={(e)=>setNewPassword(e.target.value)}/>
            <h3> Confirm Password</h3>
            <input type="text" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <br />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default NewPassworPage
