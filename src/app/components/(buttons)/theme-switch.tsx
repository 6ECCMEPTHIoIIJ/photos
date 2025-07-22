'use client';

import {useMounted} from "@/app/utilities/utilities";
import {useTheme} from "next-themes";
import styles from "./theme-switch.module.css"
import DarkModeIcon from "@/app/components/(icons)/darkmode-icon";
import LightModeIcon from "@/app/components/(icons)/lightmode-icon";


export default function ThemeSwitch() {
    const mounted = useMounted();
    const {theme, setTheme} = useTheme();

    if (!mounted) return null;

    switch (theme) {
        case "light":
            return (
                <button className={styles.toggle} onClick={() => setTheme("dark")}>
                    <DarkModeIcon/>
                </button>
            );
        case "dark":
            return (
                <button className={styles.toggle} onClick={() => setTheme("light")}>
                    <LightModeIcon/>
                </button>
            );
        default:
            return null;
    }
}