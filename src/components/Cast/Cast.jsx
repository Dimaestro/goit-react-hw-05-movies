import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tmdb from "Api/tmdb";
import CharactersList from "components/CharactersList/CharactersList";

const tmdb = new Tmdb();

const Cast = () => {
  const {moviesId} = useParams();
  const [credits, setCredits] = useState([]);
  
  useEffect(() => {
    const load = async () => {
      console.log(moviesId);
      try {
        const result = await tmdb.getDetailsMovies(moviesId, '/credits');

        if (!result) {
          toast.info('Movie not found');
          return;
        }

        setCredits(result);

      } catch (error) {
        console.log(error.message);
      }
    };
    load();
  }, [moviesId])

  console.log(credits);

  return (
    <>
      {credits.length !== 0 ? <CharactersList characters={credits}/> : <p>We don't have any credits'</p>}
    </>
  )
}

export default Cast;