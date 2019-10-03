import React from 'react';
import { useFetch } from './hooks';

import logo from './logo.svg';
import './App.css';

function App() {
  const [ data, loading ] = useFetch("/api/drawings/euroJackpot");

  return (
    <div className="App">
      <h1>Euro Jackpot Results</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.last.numbers.join(",")}
        </ul>
      )}
    </div>
  );
}

export default App;
