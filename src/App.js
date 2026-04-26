import { useState } from 'react';
import './App.css';
import './filters.css';
import { moviesData } from './moviesData';
import MovieList from './components/movieList/MovieList';
import AddMovie from './components/addMovie/addMovie';
import FilterByTitle from './components/filterTitle/filterByTitle';
import FilterByRate from './components/filterRate/filterByRate';

function App() {
  // état qui contient la liste des films
  const [movies, setMovies] = useState(moviesData);

  // fonction pour ajouter un nouveau film dans la liste
  const add_movie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // état pour stocker le texte de recherche par titre
  const [searchTitle, setSearchTitle] = useState("");

  // état pour stocker la valeur du filtre par rate 
  const [searchRate, setSearchRate] = useState(1);

  return (
    <div className="App">
      <h1>Movie App</h1>

      {/* section des filtres (titre + add movie + rate) */}
      <div className='filters'>
        
        {/* filtre par titre (input search) */}
        <FilterByTitle 
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
        />

        {/* bouton pour ajouter un film */}
        <AddMovie add_movie={add_movie} />

        {/* filtre par rating (étoiles) */}
        <FilterByRate 
          searchRate={searchRate}
          setSearchRate={setSearchRate}
        />
      </div>

      {/* liste des films filtrés par titre et rate */}
      <MovieList 
        movies={movies} 
        searchTitle={searchTitle} 
        searchRate={searchRate}
      />
    </div>
  );
}

export default App;