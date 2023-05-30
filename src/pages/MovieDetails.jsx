import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tmdb from 'Api/tmdb';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const tmdb = new Tmdb();

const MovieDetails = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const load = async () => {
      try {
        const result = await tmdb.getDetailsMovies(moviesId);

        if (!result) {
          toast.info('Movie not found');
          return;
        }

        setMovie(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    load();
  }, [moviesId]);

  console.log(location);

  return (
    <>
      <NavLink to={backLinkLocation.current}>back</NavLink>
      {movie.id && <MovieInfo movie={movie} />}
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast" name="credits">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
