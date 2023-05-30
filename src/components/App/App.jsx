import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "components/Layout/Layout";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:moviesId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={3000}/>
    </div>
  );
};
