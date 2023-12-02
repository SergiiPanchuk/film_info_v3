import {useEffect} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import css from "./btnPrevNext.module.css";
import {Movies} from "../components";

const SearchPage = () => {
    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const movieName = queryParams.get('movieName');

    const [query, setQuery] = useSearchParams({page: '1'});
    let page: string = query.get('page');

    let {movies, nextPage, prevPage} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieAction.getMovieByName({movieName, page}))
    }, [movieName, page, dispatch])

    const prev = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery((prev) => {
            if (movies.total_pages - 1 >= +prev.get('page')) {
                prev.set('page', `${+prev.get('page') + 1}`);
                return prev;
            } else {
                nextPage = 0;
            }
        })
    }

    return (
        <div>
            <p className={css.SectionHeader}>Search : {movieName}</p>
            {movies && <Movies movie={movies.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevPage} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!nextPage} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {SearchPage};