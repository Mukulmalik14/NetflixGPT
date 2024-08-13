import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/movieSlice";

const useMovieTrailor=(movieId)=>{
    const dispatch=useDispatch();

    const getTrailorVideo=async()=>{
        const fetchTraiorVideo=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const fetchData=await fetchTraiorVideo.json();
        const trailor=fetchData.results.filter((video)=> video.name==="Official Trailer");
        dispatch(addTrailorVideo(trailor));
    }

    useEffect(()=>{getTrailorVideo()},[]);
}

export default useMovieTrailor;