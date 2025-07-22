import styles from "./side-menu.module.css"
import MenuIcon from "@/app/components/(icons)/menu-icon";

export default function SideMenu() {
    return (
        <div className={styles.menu}>
            <MenuIcon/>
        </div>
    )
}