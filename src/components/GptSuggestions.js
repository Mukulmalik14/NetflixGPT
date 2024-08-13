import { useSelector } from "react-redux";
import MovieCart from "./MovieCart";


const GptSuggestions=()=>{
    const search=useSelector((store)=>(store.gpt.moviesResults));
    const specificMovie=useSelector((store)=>store.movie);
   
  return(
    <div className="m-4 p-4 bg-black text-white bg-opacity-80">
        {specificMovie.toggleSpecificMovie ? <MovieCart title={"Searched Results"} movies={specificMovie.searchSpecificMovie}></MovieCart>:<MovieCart title={"Searched Results"} movies={search}></MovieCart>}
    </div>
  )
}

export default GptSuggestions;