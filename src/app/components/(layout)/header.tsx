import styles from "./header.module.css";
import contentStore from "@/app/store/contentStore";
import ThemeSwitch from "@/app/components/(buttons)/theme-switch";

export default function Header() {
    const headerText = contentStore.headerText;

    return (
        <header className={styles.header}>
            <a href="/portfolio">
                {headerText}
            </a>
            <ThemeSwitch/>
        </header>
    )
}