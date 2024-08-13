import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";
import GptSearch from "./GptSearch";


const Browse = () => {
    const toggle=useSelector((store)=>store.gpt.searchPage);
    
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();
    return <div>
        <Header/>
        
        {toggle ?<GptSearch/>:<div>
        <MainContainer/>
        <SecondaryContainer />
        </div>
        }
        </div>
  };
  export default Browse;