import { useState, useEffect } from 'react';

function useFetch(url) {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  async function fetchUrl() {
    const res = await fetch(
      "/api/drawings/euroJackpot",
      {
        "credentials":"include",
        "headers":{
          "accept":"application/json",
          "accept-language":"en",
          "cache-control":"max-age=0",
          "sec-fetch-mode":"navigate",
          "sec-fetch-site":"none",
          "sec-fetch-user":"?1",
          "upgrade-insecure-requests":"1"
        },
        "referrerPolicy":"no-referrer-when-downgrade",
        "body":null,
        "method":"GET"
      }
    );
    const json = await res.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, [])

  return [data, loading];
}

export { useFetch };

