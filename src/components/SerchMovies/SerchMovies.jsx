import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from './SerchMovies.module.css';

const SerchMovies = () => {
  const [findValue, setFindValue] = useState('');
  const [serchParams, setSerchParams] = useSearchParams();
  const query = serchParams.get('query');
  console.log(query);


  const handleChange = event => {
    const { value } = event.target;
    setFindValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSerchParams({ query: findValue })
    setFindValue('');
  };

  return (
    <div className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="findValue"
          value={findValue}
          onChange={handleChange}
          placeholder="Search images and photos"
        />

        <button type="submit" className={styles.button}>
          <span>
            <FaSearch size={24} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default SerchMovies;
