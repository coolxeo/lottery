import React from 'react';
import { useFetch } from './hooks';

import logo from './logo.svg';
import './App.css';
import Numbers from './components/Numbers';
import Odds from './components/Odds';

function App() {
  const [ data, loading ] = useFetch("/api/drawings/euroJackpot");

  return (
    <div className="App">
      <h1>Euro Jackpot Results</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <Numbers numbers={data.last.numbers} euroNumbers={data.last.euroNumbers} />
          <Odds odds={data.last.odds}></Odds>
        </div>
      )}
    </div>
  );
}

export default App;
