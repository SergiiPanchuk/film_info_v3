import {ChangeEvent, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";


import css from "./Header.module.css"
import {SelectModes} from "./SelectModes";

const Header = () => {
    const [movieName, setMovieName] = useState('');


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMovieName(event.target.value);
    };

    const navigate = useNavigate();

    const Search = () => {
        navigate(`search?movieName=${movieName}`)
    }

    return (
        <div className={css.Header}>
            <nav>
                <NavLink to={"/home"}><img src="/icon/logo-icon.svg" alt="Logo"/></NavLink>
                <NavLink to={"/populate"}>Populate</NavLink>
                <NavLink to={"/top"}>Top</NavLink>
                <NavLink to={"/upcoming"}>Upcoming</NavLink>
                <NavLink to={"/genre"}>Genre</NavLink>
            </nav>
            <div className={css.search_block}>
                <div className={css.search}>
                    <input type="text" placeholder={'Search movies.......'} className={css.search_input}
                           value={movieName} onChange={handleChange}></input>
                    <img src="/icon/Search1.svg" alt="search" className={css.search_icon} onClick={Search}/>
                </div>
                <div className={css.select__modes}>
                    <SelectModes/>
                </div>
                <div className={css.user_block}>
                    <img src="/icon/User.svg" alt="user"/>
                    <p>Minha Conta</p>
                </div>
            </div>
        </div>
    );
};

export {Header};