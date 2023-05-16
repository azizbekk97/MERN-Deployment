import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [productList, setProductList] = useState([])

    const [toggleDelete, setToggleDelete] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((response) => {
                setProductList(response.data.results)
                console.log('This is our Dashboard get request: ', response.data.results)
            })
            .catch((err) => {
                console.log("This is our dashboard catch error", err)
            })
    }, [toggleDelete])

    const handleDelete = (e, id) => {
        console.log("this is our delete function", id)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((response) => {
            console.log("Success It's been deleted")
            setToggleDelete(!toggleDelete)
        })
        .catch((err) => {console.log("This is our handle delete method", err)})

    }


    return (
        <div>
            <hr />
            <button className='btn btn-outline-primary' ><Link to={'/create'} >Create</Link> </button>
            <hr />
            <table className='table'>
                <thead>
                    <th> All Products:  </th>
                    <th>Actions </th>
                </thead>
                <tbody>
                    {
                        productList.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td> {product.title} </td>
                                    <td>
                                        <button className='btn btn-outline-warning'> <Link to={`/products/${product._id}`}>View </Link></button> | 
                                        <button className='btn btn-outline-success'> <Link to={`/products/update/${product._id}`}>Edit </Link></button> | 
                                        <button className='btn btn-outline-danger' onClick={(e) => {handleDelete(e,product._id)}}>Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
