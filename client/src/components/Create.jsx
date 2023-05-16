import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    console.log('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
        .then((response) => {
            console.log("This is our create page", response)
            navigate("/")
        })
        .catch((err) => {
            console.log("This is our error", err)
        })
    }
    
    return (
        <div>
            <h1>Product Manager </h1>
            <form className='form-group' onSubmit={handleSubmit}>
                <br />
                <label> Title </label>
                <input type="text" className='form-control' name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label> Price </label>
                <input type="number" className='form-control' name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label> Description </label>
                <input type="text" className='form-control' name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br />
                <button type='submit' className='btn btn-outline-success'> Create </button>
            </form>
        </div>
    )
}

export default Create
