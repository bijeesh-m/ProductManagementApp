import React from 'react'

const CategoryFilter = ({ category, setCategory }) => {
    return (
        <div className=' px-10 py-3'>
            <select  className=' border px-3 py-2' value={category} onChange={(e) => setCategory(e.target.value)} name="" id="">
                <option value="All">All</option>
                <option value="Beauty">Beauty</option>
                <option value="Fragrances">Fragrances</option>
                <option value="Furniture">Furniture</option>
                <option value="Groceries">Groceries</option>
                <option value="Laptops">Laptops</option>
                <option value="Smartphones">Smartphones</option>
            </select>
        </div>
    )
}

export default CategoryFilter