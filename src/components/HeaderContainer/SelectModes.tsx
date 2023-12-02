import css from "./SelectModes.module.css"
import {useTheme} from "../../hooks";

const SelectModes = () => {

    const {setTheme} = useTheme();

    return (
        <div className={css.SelectModes}>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </div>
    );
};

export {SelectModes};