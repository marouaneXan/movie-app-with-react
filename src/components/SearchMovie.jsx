import React from 'react'
import SearchIcon from '../search.svg'
import {useRef} from 'react'

const SearchMovie = ({searchTerm,setSearchTerm,searchMovies}) => {
  const inputRef = useRef(null)
  return (
    <div className='search'>
        <input ref={inputRef} type="text" placeholder='Search for Movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="" onClick={()=>searchMovies(searchTerm)} />
    </div>
  )
}

export default SearchMovie