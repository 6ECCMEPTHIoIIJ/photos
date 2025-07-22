import styles from "./footer.module.css";
import contentStore from "@/app/store/contentStore";


export default function Footer() {
    const navLinks = contentStore.navLinks;

    return (
        <footer className={styles.footer}>

            <div className={styles.separator}/>
            <ul>
                {navLinks.map((navLink) => {
                    return (
                        <li key={navLink.name}>
                            <a href={navLink.url}>
                                {navLink.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}