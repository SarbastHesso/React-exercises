import Header from "./components/Header"
import AddForm from "./pages/AddForm"
import MoviesList from "./pages/MoviesList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {IMovie} from './interfaces';
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState<IMovie[]>([
    {
      id: Date.now(),
      title: 'The title of movie',
      rating: '3',
      genre: 'Action',
      description: 'The description of the movie'
    }
  ]) 

  const addMovie = (newMovie: IMovie) => {
    setMovies((prev) => [...prev, newMovie])
  }

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} />} />
            <Route path="add" element={<AddForm addMovie={addMovie} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
    
}

export default App
