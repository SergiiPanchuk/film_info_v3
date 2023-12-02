import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenreResponse} from "../../interfaces";
import {genreService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    genre: IGenre[]
}

const initialState: IState = {
    genre: null
};

const getGenre = createAsyncThunk<IGenreResponse, void>(
    'genreSlice/getGenre',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getGenre();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenre.fulfilled, (state, action) => {
                state.genre = action.payload.genres
            })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getGenre
}

export {
    genreActions,
    genreReducer
}
