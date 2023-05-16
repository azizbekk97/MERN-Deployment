import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
// import { response } from 'express'

const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then((response) => {
                console.log('here is update page', response.data.results)
                const product = response.data.results
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch((err) => {
                console.log("This is our dashboard catch error", err)
            })
    }, [])

    const handleUpdateSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
        .then((response) => {
            console.log('This is our handle submit page for upate', response)
            navigate("/")
        })
        .catch((err) => {
            console.log('This is our handleSubmit page error for update', err)
        })
    }




    return (
        <div>
            <h1> Edit Page</h1>
            <form className='form-group' onSubmit={handleUpdateSubmit}>
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
                <button type='submit' className='btn btn-outline-success'> Update </button>
            </form>

        </div>
    )
}

export default Update
