import {FC} from "react";

import {IMovie} from "../../interfaces";
import {PreviewMovie} from "./PreviewMovie";
import css from "./PreviewMovies.module.css"

interface IProps {
    movies: IMovie[]
}

const PreviewMovies: FC<IProps> = ({movies}) => {


    return (
        <div className={css.PreviewMovies}>
            <div className={css.movies__container}>
                {movies.map((movie) => <PreviewMovie key={movie.id} moviePopulate={movie}/>)}
            </div>
        </div>
    );
};

export {PreviewMovies};