import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./Genre.module.css"

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    const navigate = useNavigate();


    return (
        <div className={css.Genre}>
            <p onClick={() => navigate(`${id}?name=${name}`)}>
                {name}
            </p>
        </div>
    );
};

export {Genre};