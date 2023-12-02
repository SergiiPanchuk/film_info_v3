import {useLayoutEffect, useState} from "react";

interface ThemeHook {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const useTheme = (): ThemeHook => {
    const [theme, setTheme] = useState<string>('dark')

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return {theme, setTheme}
}

export {
    useTheme
}