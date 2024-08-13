import MovieCart from "./MovieCart";
import { useSelector } from "react-redux";

const SecondaryContainer=()=>{
  const movies=useSelector((store)=>store.movie);
  return(
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-32 pl-12 relative z-20">
          <MovieCart title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieCart title={"Top Rated"} movies={movies.trendingMovies} />
          <MovieCart title={"Popular"} movies={movies.popularMovies} />
          <MovieCart
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          
        </div>
      </div>
    )
  )
}

export default SecondaryContainer;