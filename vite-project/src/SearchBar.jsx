import React from 'react'

function SearchBar({setCity,city,handleSearch}){
  return (
    <div className='search-bar'>
        <input
        type='text'
        value={city}
        placeholder='enter a city'
        onChange={(e)=>setCity(e.value.target)}
        />
        <button onClick={handleSearch}>Search</button> 
    </div>
  )
}

export default SearchBar;
