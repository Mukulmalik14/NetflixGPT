import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
      const getUpcomingMovies=async ()=>{
        const fetchMovies= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const upcomingMovies=await fetchMovies.json();
        dispatch(addUpcomingMovies(upcomingMovies.results));
      }

      useEffect(()=>{getUpcomingMovies()},[]);
}

export default useUpcomingMovies;