import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies=()=>{
     const dispatch=useDispatch();
     
     const getNowPlayingMovies=async ()=>{
        const fetchNowPlayingMovies= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const fetchData=await fetchNowPlayingMovies.json();

        dispatch(addNowPlayingMovies(fetchData.results));
     }
/* eslint-disable react-hooks/exhaustive-deps */

     useEffect(()=>{getNowPlayingMovies()},[]);

}

export default useNowPlayingMovies;