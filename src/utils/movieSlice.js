import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null,
        popularMovies:null,
        upcomingMovies:null,
        trendingMovies:null,
        searchedMovies:null,
        searchSpecificMovie:null,
        toggleSpecificMovie:false,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailorVideo:(state,action)=>{
            state.trailorVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
               state.trendingMovies=action.payload;
        },
        addSearchedMovies:(state,action)=>{
            state.searchedMovies=action.payload;
        },
        addSearchedSpecificMovies:(state,action)=>{
            state.searchSpecificMovie=action.payload;
        },
        toggleSearchSpecificMovie:(state)=>{
            state.toggleSpecificMovie=!state.toggleSpecificMovie;
        }
    }
})

export const {addNowPlayingMovies,addTrailorVideo,addPopularMovies,addUpcomingMovies,addTrendingMovies,addSearchedMovies,addSearchedSpecificMovies,toggleSearchSpecificMovie}=movieSlice.actions;

export default movieSlice.reducer;