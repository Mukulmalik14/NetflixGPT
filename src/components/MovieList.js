
import { IMG_CDN } from "../utils/constants";

const MovieList=({posterPath})=>{
  
    if(!posterPath) return;
    return(
        <div className="pr-5 md:pr-4 md:w-44 w-40">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
    )
}

export default MovieList;