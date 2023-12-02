import {FC} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {baseImgURL} from "../../constants";
import css from "./Movie.module.css"
import {MovieRating} from "../StarRatingContainer";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path, id, vote_average} = movie;

    const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();
    const set = () => {
        setQuery((prev) => {
            prev.set('id', `${id}`)
            return prev
        })
        navigate(`/details?${query.toString()}`);
    }

    return (
        <div className={css.Movie}>
            <div className={css.img_block}>
                <img src={poster_path ? baseImgURL + poster_path : '/icon/no_movie_poster.png'} alt={title}
                     className={css.movie__poster} onClick={set}/>
                <img src={'/icon/play-button-icon.svg'} className={css.hover_image} alt={title}/>
            </div>
            <MovieRating rating={vote_average}/>
            <p onClick={set}>{title}</p>
        </div>
    );
};

export {Movie};