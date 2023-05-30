import noPhoto from '../../assets/istockphoto-1354776450-612x612.jpg';
import styles from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } = movie

  const year = new Date(release_date).getFullYear();
  const poster = poster_path ? `https://image.tmdb.org/t/p/w185/${poster_path}` : noPhoto;
  const userScore = Math.floor(vote_average * 10);

  return (
    <section>
      <div>
        <img
          className={styles.img}
          src={poster}
          alt={title}
          width={185}
          height={278}
        />
      </div>
      <div>
        <h2>{title} ({year})</h2>
        <p>{userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <div>
          {genres.map(({id, name}) => (<span key={id}>{name}</span>))}
        </div>
      </div>
    </section>
  )
}

export default MovieInfo;