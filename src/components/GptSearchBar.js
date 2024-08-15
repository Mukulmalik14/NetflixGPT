import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/gemini";
import { addSearchedMoviesResults } from "../utils/GptSlice";
import { addSearchedSpecificMovies, toggleSearchSpecificMovie } from "../utils/movieSlice";


const GptSearchBar=()=>{
    const toggleSearch=useSelector((store)=>(store.movie.toggleSpecificMovie))
    
    const searchMovie=useRef(null);
    const searchSpecificMovie=useRef(null);
    const dispatch=useDispatch();
    let movieArray=[];

    const searchMovieTMDB=async (movie)=>{
        const getMovies=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=true&language=en-US&page=1", API_OPTIONS);
        const movies=await getMovies.json();
        movieArray.push(movies.results[0]);
        if(movieArray.length>4) {
            dispatch(addSearchedMoviesResults(movieArray));
            movieArray=[];
        }
    }

    const searchTheMovies=async ()=>{
        const prompt = searchMovie.current.value;
        const query="Act as a Movie Recommendation system and suggest some movies for the query : " +
      prompt +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
        const result = await model.generateContent(query);
        const response = await result.response;
        const text=response.text();
        const movieList=text.split(",");
        movieList.map((movie)=>searchMovieTMDB(movie));
    }

    const toggleSearchHandler=()=>{
        dispatch(toggleSearchSpecificMovie());
    }

    const searchTheSpecificMovies=async ()=>{
        const getMovies=await fetch("https://api.themoviedb.org/3/search/movie?query="+searchSpecificMovie.current.value+"&include_adult=true&language=en-US&page=1", API_OPTIONS);
        const fetchMovie=await getMovies.json();
        dispatch(addSearchedSpecificMovies(fetchMovie.results));
    }

    
    return(
        <div className="pt-[40%] md:pt-[10%] sm:pt-[25%] flex justify-center mx-2">
            {toggleSearch?  <form className="md:w-1/2 w-[100%] grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="What exiting movies you wanted to watch" className="p-3 bg-gray-200 col-span-9" ref={searchSpecificMovie}></input>
                <button className="p-3 text-white bg-red-700 col-span-3 ml-1" onClick={searchTheSpecificMovies}>Movie Search</button> 
            </form> 
            :<form className="md:w-1/2 w-full grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="What type of exiting movies you wanted to watch" className="p-3 bg-gray-200 col-span-9" ref={searchMovie}></input>
                <button className="p-3 text-white bg-red-700 col-span-3 ml-1" onClick={searchTheMovies}>AI Search</button>   
            </form>}
            <button className="p-3 text-white bg-red-700 ml-4 rounded-sm" onClick={toggleSearchHandler}>Movie Search</button>
        </div>
    )
}

export default GptSearchBar;