import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product/Product'
import Pagination from '../components/Pagination/Pagination'

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    } ,[])

    return(
    <div className="mx-auto  max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 py-20">
        {products.map((product) => (
            <Product key={product._id} product={product} />
        ))}
        </div>
        <div className='w-full flex my-5 mx-auto'>
            <Pagination />
        </div>
    </div>
    )
}

export default ProductsList