import {React,useState,useEffect} from 'react'
import axios from 'axios';

function getMovies() {
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(process.env.NEXT_PUBLIC_MOVIE_URL);
        const data = await resp?.data.results;
        setApiData(data);
      } catch (error) {
        setServerError(error);
      }
    };

    fetchData();
  }, []);

  return { apiData, serverError };
}

export default getMovies