import React from 'react'
import Movie from './Movie'

const Movies = ({movies}) => {
  return (
    <>
    {movies.map((movie)=>(
      <Movie movie={movie} />
    ))}
    </>
  )
}

export default Movies