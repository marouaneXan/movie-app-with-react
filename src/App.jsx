import './App.css';
import {useState,useEffect} from 'react' 
import SearchMovie from './components/SearchMovie'
import axios from 'axios';
const api_url='http://www.omdbapi.com?apikey=985fa6c2'
function App() {
  const [movies, setMovies] = useState([])
  const searchMovies=async (title)=>{
    const res=await axios(`${api_url}&s=${title}`)
    setMovies(res.data.Search)
  }
  useEffect(()=>{
    searchMovies('spiderman')
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <SearchMovie/>
      {movies.map((movie)=>(
        <>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
        </>
      ))}
    </div>
  );
}

export default App;
