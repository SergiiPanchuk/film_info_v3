import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICast, ICredits} from "../../interfaces";
import {castService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    actors: ICast[];
}

const initialState: IState = {
    actors: null
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
    extraReducers:builder =>
        builder
            .addCase(getCast.fulfilled, (state, action)=> {
                state.actors = action.payload.cast
            })

})


const {reducer:castReducer, actions} = castSlice;

const castAction ={
    ...actions,
    getCast
}

export {
    castAction,
    castReducer
}