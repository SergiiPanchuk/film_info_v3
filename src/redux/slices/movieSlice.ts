import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IDetails, IMovies} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movieSearch: IMovies,
    movieByGenre: IMovies,
    movieUpcoming: IMovies,
    moviePopulate: IMovies,
    movieTop: IMovies,
    moviesByGenre: IMovies
    movieDetails: IDetails,
    prevPage: number,
    nextPage: number,
    errors: boolean,
    loading: boolean
}

const initialState: IState = {
    movieSearch: null,
    movieByGenre: null,
    movieUpcoming: null,
    moviePopulate: null,
    movieTop: null,
    moviesByGenre: null,
    movieDetails: null,
    prevPage: null,
    nextPage: null,
    errors: false,
    loading: false
};

const getPopular = createAsyncThunk<IMovies, string>(
    'movieSlice/getPopular',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopular(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getTop = createAsyncThunk<IMovies, string>(
    'movieSlice/getTop',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTop(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getUpcoming = createAsyncThunk<IMovies, string>(
    'movieSlice/getUpcoming',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getUpcoming(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieById = createAsyncThunk<IDetails, string>(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByMovieId(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getByGenreId = createAsyncThunk<IMovies, { genreId: string, page: string }>(
    'movieSlice/getByGenreId',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genreId, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieByName = createAsyncThunk<IMovies, { movieName: string, page: string }>(
    'movieSlice/getMovieByName',
    async ({movieName, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByName(movieName, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieDetails = action.payload
                state.errors = false;
                state.loading = false
            })
            .addCase(getPopular.fulfilled, (state, action) => {
                state.moviePopulate = action.payload
            })
            .addCase(getTop.fulfilled, (state, action) => {
                state.movieTop = action.payload
            })
            .addCase(getUpcoming.fulfilled, (state, action) => {
                state.movieUpcoming = action.payload
            })
            .addCase(getMovieByName.fulfilled, (state, action) => {
                state.movieSearch = action.payload
            })
            .addCase(getByGenreId.fulfilled, (state, action) => {
                state.movieByGenre = action.payload
            })
            .addMatcher(isFulfilled(getPopular, getTop, getUpcoming, getByGenreId, getMovieByName), (state, action) => {
                state.prevPage = action.payload.page - 1;
                state.nextPage = action.payload.page + 1;
                state.errors = false;
                state.loading = false
            })
            .addMatcher(isPending(getPopular, getTop, getUpcoming, getByGenreId, getMovieByName, getMovieById), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getPopular, getTop, getUpcoming, getByGenreId, getMovieByName, getMovieById), state => {
                state.errors = true;
            })
})

let {reducer: movieReducer, actions} = movieSlice;

const movieAction = {
    ...actions,
    getPopular,
    getMovieById,
    getTop,
    getUpcoming,
    getByGenreId,
    getMovieByName
}

export {
    movieAction,
    movieReducer
}