import {FC} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {baseImgURL} from "../../constants";
import css from "./PreviewMovie.module.css"

interface IProps {
    moviePopulate: IMovie
}

const PreviewMovie: FC<IProps> = ({moviePopulate}) => {
    const {poster_path, title, id} = moviePopulate;
    const [query, setQuery] = useSearchParams(`id=${id}`);
    const navigate = useNavigate();


    const set = () => {
        setQuery((prev) => {
            prev.set('id', `${id}`)
            return prev
        })
        navigate(`/details?${query.toString()}`);
    }

    return (
        <div className={css.PreviewMovie}>
            <img src={baseImgURL + poster_path} alt={title} onClick={set}/>
            <p onClick={set}>{title}</p>
        </div>
    );
};

export {PreviewMovie};