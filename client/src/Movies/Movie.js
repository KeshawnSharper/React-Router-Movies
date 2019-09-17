import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Movie(props) {
  //renamed to movies because you are getting multiple movies
  const [movies, setMovies] = useState([]);

  //made this simpler and removed id, you never use it
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/`)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  //you don't need to get movies again when id changes
  //  because you already have all the movies
  }, []);

  //changed movieId to movie since that is what you
  //  want to get 
  const movie = movies.find(
    i => props.match.params.id === `${i.id}`
  );

  //now it makes sence to check if movie (single) is falsy
  // before movie was [] and if([]) is always truthy
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  console.log(movie.title)

return  (
  <div className="save-wrapper">
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    <div className="save-button">Save</div>
  </div>
);


  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

 
}


