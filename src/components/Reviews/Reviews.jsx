import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tmdb from "../../api/tmdb";
import ReviewsList from "components/ReviewsList/ReviewsList";

const tmdb = new Tmdb();

const Reviews = () => {
  const {moviesId} = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    const load = async () => {
      console.log(moviesId);
      try {
        const result = await tmdb.getDetailsMovies(moviesId, '/reviews');

        if (!result) {
          toast.info('Movie not found');
          return;
        }

        setReviews(result);

      } catch (error) {
        console.log(error.message);
      }
    };
    load();
  }, [moviesId])

  console.log(reviews);

  return (
    <div>
      {reviews.length !== 0 ? <ReviewsList reviews={reviews} /> : <p>We don't have any reviews'</p>}
    </div>
  )
}

export default Reviews
