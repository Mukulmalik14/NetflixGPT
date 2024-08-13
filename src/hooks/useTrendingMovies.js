import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies=()=>{
      const dispatch=useDispatch();

      const getTrendingMovies=async()=>{
        const trendingMovies=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const fetchData=await trendingMovies.json();
        dispatch(addTrendingMovies(fetchData.results));
      }

    useEffect(()=>{getTrendingMovies()},[]);  
}

export default useTrendingMovies;