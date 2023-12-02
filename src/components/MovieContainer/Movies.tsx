import {FC} from "react";

import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";
import css from "./Movies.module.css"

interface IProps {
    movie: IMovie[]
}

const Movies: FC<IProps> = ({movie}) => {
    return (
        <div className={css.PopularMovies}>
            {movie.map(movie => <Movie movie={movie}/>)}
        </div>
    );
};

export {Movies};