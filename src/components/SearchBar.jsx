import React from 'react'

const SearchBar = ({ search, setSearch }) => {
    return (
        <div>
            <input placeholder=' Search products...' className=' border rounded-full w-xl px-5 py-2' type="text" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default SearchBar