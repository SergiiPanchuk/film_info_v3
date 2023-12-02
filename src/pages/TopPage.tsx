import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import css from "./btnPrevNext.module.css"
import {Movies} from "../components";

const TopPage = () => {
    const [query, setQuery] = useSearchParams({page:'1'});
    let {movieTop,prevPage,nextPage} = useAppSelector(state => state.movies);

    const dispatch = useAppDispatch();

    const page = query.get('page')

    useEffect(() => {
        dispatch(movieAction.getTop(page))
    }, [page,dispatch])

    const prev = () => {
        setQuery((prev) => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery((prev) => {
            if (movieTop.total_pages - 1 >= +prev.get('page')) {
                prev.set('page', `${+prev.get('page') + 1}`);
                return prev;
            } else {
                nextPage = 0;
            }
        })
    }

    return (
        <div>
            <p className={css.SectionHeader}>Top Movie</p>
            {movieTop && <Movies movie={movieTop.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevPage} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!nextPage} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {TopPage};