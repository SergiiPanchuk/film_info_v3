import {FC} from "react";

import {ICast} from "../../interfaces";
import {baseImgURL} from "../../constants";
import css from "./Actor.module.css"

interface IProps {
    actor: ICast
}

const Actor: FC<IProps> = ({actor}) => {

    const {name, profile_path} = actor;
    return (
        <div className={css.Actor}>
            <img src={profile_path ? baseImgURL + profile_path : '/icon/inkognito.jpg'} alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export {Actor};