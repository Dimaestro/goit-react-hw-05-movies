import { NavLink, useLocation } from "react-router-dom";

const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <NavLink to={location.pathname === '/' ? `movies/${id}` : `${id}`} state={{ from: location }}>
                {title ? title : name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TrendingMoviesList;