import { useDispatch, useSelector } from "react-redux";
import { BG_IMG } from "../utils/constants";
import GptSearch from "./GptSearch";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import Header from "./Header";


const SearchPage=()=>{
    
    
     return(
        <div>
            <Header></Header>
            <div className="-z-20 absolute">
            <img src={BG_IMG} alt="bg-netflix"></img>
            </div>
              <GptSearch></GptSearch>
              <GptSearchBar></GptSearchBar>
              <GptSuggestions></GptSuggestions>
             
        </div>
     )
}

export default SearchPage;