import {React,useState,useEffect} from 'react'
import axios from 'axios';

function getMovies(props) {


  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let url; 
      console.log(props);
      
      if(props == false){
        url = process.env.NEXT_PUBLIC_MOVIE_URL
      } else{
        url = process.env.NEXT_PUBLIC_TV_URL
      }

      try {
        const resp = await axios.get(url);
        const data = await resp?.data.results;
        setApiData(data);
      } catch (error) {
        setServerError(error);
      }
    };

    fetchData();
  }, [props]);

  return { apiData, serverError };
}

export default getMovies