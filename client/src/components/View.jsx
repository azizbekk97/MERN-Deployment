import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const View = (props) => {
    const [product, setProduct] = useState({})

    const { id } = useParams()


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then((response) => {
                console.log(response)
                setProduct(response.data.results)
            })
            .catch((err) => {
                console.log("This is our dashboard catch error", err)
            })
    }, [id])

    return (
        <div>
            <hr />
            <h1> {product.title}</h1>
            <br />
            <p> {product.price} </p>
            <br />
            <p> {product.description} </p>
        </div>
    )
}

export default View
