import {React,useState,useEffect} from 'react'
import axios from 'axios';

function getMovies(props) {


  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let url; 
      
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


function getSummary(movieID, checked) {

  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);



  useEffect(() => {
    
    const fetchData = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      let url; 


      if(checked == false){
         url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`; 
      } else{
         url = `https://api.themoviedb.org/3/tv/${movieID}?api_key=${API_KEY}&language=en-US`; 
      }

      

      try {
        const resp = await axios.get(url);
        const data = await resp?.data;
        setApiData(data);
      } catch (error) {
        setServerError(error);
      }
    };

    fetchData();
  }, [movieID]);

  return { apiData, serverError };
}






export {getMovies,getSummary}