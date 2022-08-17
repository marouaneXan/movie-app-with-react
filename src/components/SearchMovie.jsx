import React from 'react'
import SearchIcon from '../search.svg'

const SearchMovie = () => {
  return (
    <div className='search'>
        <input type="text" placeholder='Search for Movies' value={'spaderman'} onChange={(e)=>SearchMovie(e.target.value)} />
        <img src={SearchIcon} alt="" />
    </div>
  )
}

export default SearchMovie