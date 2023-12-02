import {FC, useEffect} from "react";

import {ICast} from "../../interfaces";
import {Actor} from "./Actor";
import css from "./Actors.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {castAction} from "../../redux";

interface IProps {
    id: number
}

const Actors: FC<IProps> = ({id}) => {

    const dispatch = useAppDispatch();
    const {actors} = useAppSelector(state => state.cast);

    useEffect(() => {
        dispatch(castAction.getCast(id))
    }, [id, dispatch])

    return (
        <div className={css.Actor__container}>
            <h4>Main Cast</h4>
            <div className={css.actors}>
                {actors && actors.slice(0, 14).map((actor: ICast) => <Actor key={actor.id} actor={actor}/>)}
            </div>
        </div>
    );
};


export {Actors};