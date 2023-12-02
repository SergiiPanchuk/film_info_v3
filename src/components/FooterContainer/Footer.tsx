import {NavLink} from "react-router-dom";

import css from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={css.Footer}>
            <nav>
                <NavLink to={"/home"}><img src="/icon/logo-icon.svg" alt="Logo"/></NavLink>
                <NavLink to={"/populate"}>Populate</NavLink>
                <NavLink to={"/top"}>Top</NavLink>
                <NavLink to={"/upcoming"}>Upcoming</NavLink>
                <NavLink to={"/genre"}>Genre</NavLink>
            </nav>
        </div>
    );
};

export {Footer};