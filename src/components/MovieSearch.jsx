import { useState } from 'react';


const MovieSearch = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      );
}

export default MovieSearch
