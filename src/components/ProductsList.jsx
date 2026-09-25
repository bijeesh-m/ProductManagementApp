import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({ products }) => {
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10'>

            {products.map((prod) => {
                return <ProductCard key={prod.id} product={prod} />
            })}

        </div>
    )
}

export default ProductsList