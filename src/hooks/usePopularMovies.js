import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
      const getPopularMovies=async ()=>{
        const fetchMovies= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const popularMovies=await fetchMovies.json();
        dispatch(addPopularMovies(popularMovies.results));
      }
/* eslint-disable react-hooks/exhaustive-deps */

      useEffect(()=>{getPopularMovies()},[]);
}

export default usePopularMovies;