import styles from "./page.module.css";
import ThemeSwitch from "@/app/components/(buttons)/theme-switch";
import Header from "@/app/components/(layout)/header";
import Footer from "@/app/components/(layout)/footer";
import Main from "@/app/portfolio/main";
import SideMenu from "@/app/components/(layout)/side-menu";

export default function Portfolio() {
    return (
        <div className={styles.page}>
            <SideMenu/>
            <div className={styles.content}>
                <ThemeSwitch/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}
