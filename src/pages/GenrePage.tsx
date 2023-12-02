import {useAppDispatch, useAppSelector} from "../hooks";
import {useEffect} from "react";

import {genreActions} from "../redux";
import {Genres} from "../components";

const GenrePage = () => {
    const {genre} = useAppSelector(state => state.genre);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenre())
    }, [dispatch])

    return (
        <div>
            {genre && <Genres genre={genre}/>}
        </div>
    );
};

export {GenrePage};