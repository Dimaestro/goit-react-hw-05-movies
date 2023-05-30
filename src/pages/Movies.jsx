
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tmdb from 'Api/tmdb';
import SerchMovies from 'components/SerchMovies/SerchMovies';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';

const tmdb = new Tmdb();

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [serchMoviesList, setSerchMoviesList] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    const load = async () => {
      try {
        const result = await tmdb.serchMovies(query);
        console.log(result);
        setSerchMoviesList(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (query) {
      load();
    }
    
  },[query])

  // const handleSubmit = (query) => {
  //   setSearchParams(query.trim().toLowerCase());
  // }

  return (
    <>
      <SerchMovies />
      <TrendingMoviesList movies={serchMoviesList} />
    </>
  )
}

export default Movies;