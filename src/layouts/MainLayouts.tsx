import {Outlet} from "react-router-dom";
import 'reset-css';

import css from "./MainLayouts.module.css"
import {Header} from "../components";
import {Footer} from "../components/FooterContainer/Footer";

const MainLayouts = () => {

    return (
        <div className={css.MainLayouts}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayouts};