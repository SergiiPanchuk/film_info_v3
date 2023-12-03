import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import {MovieDetails} from "../components";
import css from "./btnPrevNext.module.css";

const MovieDetailsPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const {movieDetails, errors, loading} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieById(id))
    }, [id,dispatch])

    return (
        <div>
            {loading && <div className={css.loading}></div>}
            {errors && <div className={css.errors}>Errors loading</div>}
            {movieDetails && <MovieDetails movie={movieDetails}/>}
            MovieDetailsPage
        </div>
    );
};

export {MovieDetailsPage};