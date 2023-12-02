import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import css from "./btnPrevNext.module.css"
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieAction} from "../redux";
import {Movies} from "../components";

const GenreIdPage = () => {
    let {movies, nextPage, prevPage} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page:'1'});

    const {genreId} = useParams()
    const page = query.get('page')
    const name = query.get('name')

    useEffect(() => {
        dispatch(movieAction.getByGenreId({genreId, page}))
    }, [page,genreId,dispatch])

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
            <p className={css.SectionHeader}>{name}</p>
            {movies && <Movies movie={movies.results}/>}
            <div className={css.btn__block}>
                <button className={css.btn__prev_next} disabled={!prevPage} onClick={prev}>prev</button>
                <button className={css.btn__prev_next} disabled={!nextPage} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {GenreIdPage};