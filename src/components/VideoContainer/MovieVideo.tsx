import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {videoActions} from "../../redux/slices/videoSlice";
import {youtubeBaseUrl} from "../../constants";
import css from "./MovieVideo.module.css"

interface IProps {
    title: string
}

const MovieVideo:FC<IProps> = ({title}) => {
    const {videoId, errors, loading} = useAppSelector(state => state.video);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(videoActions.getVideo(title))
    }, [title, dispatch])

    const videoUrl = `${youtubeBaseUrl}/${videoId}`;

    return (
        <div className={css.MovieVideo}>
            {loading && <div className={css.loading}></div>}
            {errors && <div className={css.errors}>Errors loading</div>}
            {videoId && (
                <iframe
                    width="760"
                    height="515"
                    src={`${videoUrl}?rel=0`}
                    title="YouTube video player"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export {MovieVideo};