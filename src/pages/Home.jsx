import { useEffect, useState } from "react";
import Tmdb from "api/tmdb";
import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";


const tmdb = new Tmdb();

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await tmdb.getTrendingMovies();
        console.log(result);
        setTrendingMovies(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    load();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingMoviesList movies={trendingMovies} />
    </>
  )
}

export default Home;