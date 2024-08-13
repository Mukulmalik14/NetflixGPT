import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch=()=>{
     return(
        <div>
            <div className="-z-20 absolute">
            <img src={BG_IMG} alt="bg-netflix"></img>
            </div>
             <GptSearchBar></GptSearchBar>
             <GptSuggestions></GptSuggestions>
        </div>
     )
}

export default GptSearch;