import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer=()=>{
  
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);

    if(!movies) return;
  
    const movie=movies[2];
    

    const {original_title,overview,id}=movie;
    

  return (
    
    <div>
       <VideoTitle title={original_title} overview={overview}></VideoTitle>
       <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer;