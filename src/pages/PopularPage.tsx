import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {Movies} from "../components";
import css from "./btnPrevNext.module.css"
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";

const PopularPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    let {moviePopulate, prevPage, nextPage, errors, loading} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const page = query.get('page')
    useEffect(() => {
        dispatch(movieAction.getPopular(page))

    }, [dispatch, page])

    const prev = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery((prev) => {
            if (moviePopulate.total_pages - 1 >= +prev.get('page')) {
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
            <p className={css.SectionHeader}>Popular Movie</p>
            {moviePopulate && <Movies movie={moviePopulate.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevPage} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!nextPage} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {PopularPage};