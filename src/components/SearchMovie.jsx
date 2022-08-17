import React from 'react'
import SearchIcon from '../search.svg'

const SearchMovie = ({searchTerm,setSearchTerm,searchMovies}) => {
  return (
    <div className='search'>
        <input type="text" placeholder='Search for Movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="" onClick={()=>searchMovies(searchTerm)} />
    </div>
  )
}

export default SearchMovie