import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className=' relative  flex items-center'>
            <input  placeholder=' Search products...' className=' border rounded-full w-xl pl-12 pr-5 py-2' type="text" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
            <span className=' absolute left-4 '>🔍</span>
        </div>
    )
}

export default SearchBar