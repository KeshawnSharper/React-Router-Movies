import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export const MovieCard = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return movies.map( element => <Link to={`/movies/${element.id}`} key={element.id}>{element.title}</Link>)
};

export default MovieCard;
