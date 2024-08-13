import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:
     {gptSearchPage:false,
        searchPage:false,
        moviesResults:null,
     },
    reducers:{
        toggleGPTSearchPage:(state)=>{
            state.gptSearchPage=!state.gptSearchPage;
        },
        toggleSearchPage:(state)=>{
            state.searchPage=!state.searchPage;
        },
        addSearchedMoviesResults:(state,action)=>{
            state.moviesResults=action.payload;
        }
    }
})

export const {toggleGPTSearchPage,toggleSearchPage,addSearchedMoviesResults}=GptSlice.actions;

export default GptSlice.reducer;