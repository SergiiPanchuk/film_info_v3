import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICast, ICredits} from "../../interfaces";
import {castService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    actors: ICast[];
    errors: boolean,
    loading: boolean
}

const initialState: IState = {
    actors: null,
    errors: false,
    loading: false
};

const getCast = createAsyncThunk<ICredits, number>(
    'castSlice/getCast',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await castService.getByMovieId(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCast.fulfilled, (state, action) => {
                state.actors = action.payload.cast
                state.errors = false
                state.loading = false
            })
            .addCase(getCast.pending, state => {
                state.loading = true
            })
            .addCase(getCast.rejected, state => {
                state.errors = true
            })

})


const {reducer: castReducer, actions} = castSlice;

const castAction = {
    ...actions,
    getCast
}

export {
    castAction,
    castReducer
}