
import MovieList from "./MovieList";

const MovieCart=({title,movies})=>{
      
      return(
        <div className="py-4">
             <h1 className="text-3xl py-4 text-white">{title}</h1>
             <div className="flex overflow-x-scroll">
             <div className="flex"> 
             {movies?.map((movie)=><MovieList key={movie.id} posterPath={movie.poster_path}/>)}
             </div>
             </div>
        </div>
        
      )
}

export default MovieCart;