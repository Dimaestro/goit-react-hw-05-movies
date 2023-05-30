import axios from 'axios';

class Tmdb {
  static BASE_URL = 'https://api.themoviedb.org/3/';
  static TRENDING_URL = 'trending/all/day';
  static SERCH_URL = 'search/movie';
  static MOVIE_URL = 'movie/';
  static API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWFlMGIwOGY4YjY2YjlkYWJjZDU1NmVjN2Q1ZTZkNiIsInN1YiI6IjY0NzI0ZDQwZGQ3MzFiMDBkZGYwODY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LLt7atViSK39cLvgtemeZh3Xs2f2mDqebGQgM6iwFHY';

  async getTrendingMovies() {
    const options = {
      method: 'GET',
      url: `${Tmdb.BASE_URL}${Tmdb.TRENDING_URL}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: Tmdb.API_KEY,
      },
    };

    try {
      const responce = await axios.request(options);
      const {
        data: { results },
      } = responce;
      return results;
    } catch (error) {
      console.log(error.message);
    }
  }

  async serchMovies(query) {
    const options = {
      method: 'GET',
      url: `${Tmdb.BASE_URL}${Tmdb.SERCH_URL}`,
      params: {
        include_adult: 'false',
        language: 'en-US',
        page: '1',
        query: query,
      },
      headers: {
        accept: 'application/json',
        Authorization: Tmdb.API_KEY,
      },
    };

    try {
      const responce = await axios.request(options);
      const {
        data: { results },
      } = responce;
      return results;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getDetailsMovies(id, info = '') {
    const options = {
      method: 'GET',
      url: `${Tmdb.BASE_URL}${Tmdb.MOVIE_URL}${id}${info}`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: Tmdb.API_KEY,
      },
    };

    try {
      const responce = await axios.request(options);

      if (info === '/reviews') {
        const { data: { results } } = responce;
        return results;
      }

      if (info === '/credits') {
        const { data: {cast} } = responce;
        return cast;
      }

      const { data } = responce;
      return data;

    } catch (error) {
      console.log(error.message);
    }
  }
}

export default Tmdb;
