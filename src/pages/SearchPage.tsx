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

    let {movieSearch, nextPage, prevPage ,errors, loading} = useAppSelector(state => state.movies);
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
            if (movieSearch.total_pages - 1 >= +prev.get('page')) {
                prev.set('page', `${+prev.get('page') + 1}`);
                return prev;
            } else {
                nextPage = 0;
            }
        })
    }

    return (
        <div>
            {loading && <div className={css.loading}></div>}
            {errors && <div className={css.errors}>Errors loading</div>}
            <p className={css.SectionHeader}>Search : {movieName}</p>
            {movieSearch && <Movies movie={movieSearch.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevPage} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!nextPage} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {SearchPage};