import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import {NavLink} from "react-router-dom";
import {HomeUpcoming, PreviewMovies} from "../components/HomeContainer";
import css from "./HomePage.module.css"

const HomePage = () => {
    const {moviePopulate,movieTop,movieUpcoming, errors, loading} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getPopular('1'))
        dispatch(movieAction.getTop('1'))
        dispatch(movieAction.getUpcoming('1'))
    }, [dispatch])

    return (
        <div className={css.HomePage}>
            {loading && <div className={css.loading}></div>}
            {errors && <div className={css.errors}>Errors loading</div>}
            {movieUpcoming && <HomeUpcoming upcomingMovie={movieUpcoming.results[0]}/>}
            <div>
                <div className={css.preview__text}>
                    <p>Upcoming Movie</p>
                    <NavLink to={'/upcoming'}>all</NavLink>
                </div>
                {movieUpcoming && <PreviewMovies movies={movieUpcoming.results.slice(0, 7)}/>}
            </div>

            <div>
                <div className={css.preview__text}>
                    <p>Populate Movie</p>
                    <NavLink to={'/populate'}>all</NavLink>
                </div>
                {moviePopulate && <PreviewMovies movies={moviePopulate.results.slice(0, 7)}/>}
            </div>

            <div className={css.preview__text}>
                <p>Top Movie</p>
                <NavLink to={'/top'}>all</NavLink>
            </div>
            {movieTop && <PreviewMovies movies={movieTop.results.slice(0, 7)}/>}
        </div>
    );
};

export {HomePage};