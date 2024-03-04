import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Clothes from '../assets/hiking-boots_11283212.png';
import Rating from '../components/Rating/Rating';

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();

    }, [id]);

    if(!product){
      return <div>Loading...</div>
    }
    return(
        <div className="flex justify-center p-4 border-b border-gray-200 mx-auto max-w-screen-2xl gap-4">
            <div className="w-2/4 mr-4">
            <img src={Clothes} alt={product.id} className="w-full h-full object-cover" />
            </div>
            <div className="w-2/4">
            <h2 className="text-3xl font-bold my-8">{product.name}</h2>
            <p className="text-gray-600 font-light leading-8 mb-2">Product Description: {product.description}</p>

            <table className="table-auto bg-gray-100 w-full">
            <tbody>
            <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Review</td>
                    <td className="p-4 text-right"><Rating /></td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Products</td>
                    <td className="p-4 text-right">{product.price} zł </td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Shipping</td>
                    <td className="p-4 text-right">15 zł</td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Tax</td>
                    <td className="p-4 text-right">23%</td>
                </tr>
                <tr className="border border-gray-200">
                    <td className="p-4 font-semibold border">Total</td>
                    <td className="p-4 text-right font-semibold">{product.price}</td>
                </tr>
            </tbody>
        </table>


            <button className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
        </div>
        );
}

// SingleProduct.propTypes = {
//   params: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };


export default SingleProduct;