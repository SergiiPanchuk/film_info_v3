import {FC} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {baseImgURL} from "../../constants";
import css from "./HomeUpcoming.module.css"

interface IProps {
    upcomingMovie: IMovie
}

const HomeUpcoming: FC<IProps> = ({upcomingMovie}) => {
    const { title, backdrop_path, id} = upcomingMovie;
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
        <div className={css.HomeUpcoming}>
            <img src={baseImgURL + backdrop_path} alt={title} onClick={set}/>
        </div>
    );
}

export {HomeUpcoming};