import React from 'react'

const ProductCard = ({ product, onDelete }) => {
    return (
        <div className=' relative border p-5 space-y-2 bg-amber-50 rounded-2xl'>
            <img src={product.image} alt={product.name} />
            <h1 className=' text-xl font-bold'>{product.name}</h1>
            <p className=' text-5xl font-black'>₹{product.price}</p>
            <p className=' text-lg italic'>{product.category}</p>
            <button onClick={() => onDelete(product.id)} className=' bg-red-500 text-white rounded-full px-3 py-1 absolute top-5 right-5'>Delete</button>
        </div>
    )
}

export default ProductCard