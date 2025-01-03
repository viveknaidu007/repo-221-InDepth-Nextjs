"use client"

import React, { useState } from 'react'

const AddMobile = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('image', image);
        data.append('name', name);
        data.append('price', price);

        try {
            let result = await fetch('/api/upload-image', {
                method: 'POST',
                body: data,
            });
            result = await result.json();
            if (result.success) {
                alert("Product Added Successfully");
            } else {
                alert("Failed to Add Product");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <h3>Mobile Name</h3>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <h3>Mobile Price</h3>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <h3>Mobile Image</h3>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                <br /><br />
                <button type='submit'>Add Mobile</button>
            </form>
        </div>
    )
}

export default AddMobile;
