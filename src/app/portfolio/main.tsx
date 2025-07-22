import styles from "./main.module.css"
import contentStore from "@/app/store/contentStore";
import Image from "next/image";

export default function Main() {
    const photos = contentStore.photos;

    return (
        <main className={styles.masonry}>
            {photos.map((photo, i) => {
                return (
                    <div className={styles.photo} key={i}>
                        <Image src={photo.src} alt={photo.alt}
                               width={photo.width}
                               height={photo.height}
                               layout="responsive"
                               quality={80}/>
                    </div>
                );
            })}
        </main>
    )
}