import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import {MovieDetails} from "../components";

const MovieDetailsPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const {movieDetails} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieById(id))
    }, [id,dispatch])

    return (
        <div>
            {movieDetails && <MovieDetails movie={movieDetails}/>}
            MovieDetailsPage
        </div>
    );
};

export {MovieDetailsPage};