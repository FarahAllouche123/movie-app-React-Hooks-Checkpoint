import MovieCard from "../movieCard/movieCard";
import "./movieList.css";

const MovieList = ({ movies, searchTitle, searchRate }) => {
  return (
    // conteneur de la liste des films
    <div className="movie-list">

      {
        // filtrer les films selon le titre et la note
        movies
          .filter((movie) =>
            // filtre par titre 
            (movie.title || "")
              .toUpperCase()
              .includes((searchTitle || "").toUpperCase())
            &&
            // filtre par rate 
            (!searchRate || Number(movie.rate) >= Number(searchRate))
          )

          // affichage des cartes de films
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
      }

    </div>
  );
};

export default MovieList;