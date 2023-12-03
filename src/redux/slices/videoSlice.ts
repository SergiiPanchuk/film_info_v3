import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IVideo} from "../../interfaces";
import {videoService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    youTubeRes: IVideo,
    videoId:string,
    errors: boolean,
    loading:boolean
}

const initialState: IState = {
    youTubeRes: null,
    videoId:null,
    errors: false,
    loading: false
};

const getVideo = createAsyncThunk<IVideo, string> (
    'videoSlice/getVideo',
    async (title,{rejectWithValue} )=>{
        try {
            const {data} = await videoService.getVideo(title)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)
const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getVideo.fulfilled, (state, action)=> {
                state.videoId = action.payload.items[0].id.videoId
                state.errors = false
                state.loading = false
            })
            .addCase(getVideo.pending, state => {
                state.loading = true
            })
            .addCase(getVideo.rejected, state => {
                state.errors = true
            })
})

const {reducer: videoReducer, actions} = videoSlice;

const videoActions = {
    ...actions,
    getVideo
}

export {
    videoActions,
    videoReducer
}

