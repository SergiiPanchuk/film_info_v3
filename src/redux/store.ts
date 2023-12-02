import {configureStore} from "@reduxjs/toolkit";


import {videoReducer} from "./slices/videoSlice";
import {castReducer, genreReducer, movieReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        cast: castReducer,
        genre: genreReducer,
        video: videoReducer
    }
})

export {
    store
}