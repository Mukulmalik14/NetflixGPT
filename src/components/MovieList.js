
import { IMG_CDN } from "../utils/constants";

const MovieList=({posterPath})=>{
    if(!posterPath) return;
    return(
        <div className="pr-4 w-44">
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
    )
}

export default MovieList;