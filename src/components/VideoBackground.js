import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground=({movieId})=>{
    const trailor=useSelector((store)=>store.movie?.trailorVideo);
    useMovieTrailor(movieId);
    if(!trailor) return;

    const trailorKey=trailor[0].key;
        
     return(<div className="w-[100%]">
        <iframe 
        className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailorKey+"?loop=1&mute=1&autoplay=1&playlist="+trailorKey} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
     </div>)
}

export default VideoBackground;