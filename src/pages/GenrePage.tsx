import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";

import {genreActions} from "../redux";
import {Genres} from "../components";
import css from "./btnPrevNext.module.css";

const GenrePage = () => {
    const {genre, errors, loading} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch])

    return (
        <div>
            {loading && <div className={css.loading}></div>}
            {errors && <div className={css.errors}>Errors loading</div>}
            {genre && <Genres genre={genre}/>}
        </div>
    );
};

export {GenrePage};