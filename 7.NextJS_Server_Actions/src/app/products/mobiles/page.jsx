
import DBConnection from '@/app/lib/config/connection'
import MobileModel from '@/app/lib/models/Mobile'
import React from 'react'

const page = () => {

    const addProductHandler=async(formData)=>{
        "use server"
       await DBConnection()
       let title = formData.get("title");
       let model = formData.get("model")
       let price = formData.get("price")
        console.log({title, model, price})

    await MobileModel.create({title:title, model:model, price:price})
        console.log("Mobile added successfully!")
    }

  return (
    <div>
      <form action={addProductHandler}>
      <h1>Server actions</h1>
      <input type="text" name='title' /><br />
      <input type="text" name='model' /><br />
      <input type="text" name='price' /><br />
      <button type='submit'>Add Mobile</button>

      </form>
    </div>
  )
}

export default page


