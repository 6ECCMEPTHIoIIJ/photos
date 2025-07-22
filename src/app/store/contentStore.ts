import probe from "probe-image-size";

export interface NavLink {
    name: string;
    url: string;
}

interface Photo {
    src: string;
    alt: string;
}

export interface SizedPhoto extends Photo {
    width: number;
    height: number;
}

export class ContentStore {
    private _photos: SizedPhoto[] = [];
    private _headerText: string = "";
    private _navLinks: NavLink[] = [];

    public get photos() {
        return this._photos;
    }

    public get headerText() {
        return this._headerText;
    }

    public get navLinks() {
        return this._navLinks;
    }

    public async setPhotos(photos: Photo[]) {
        this._photos = await Promise.all(
            photos.map(async (photo) => {
                const {width, height} = await probe(photo.src);
                return {...photo, width, height};
            })
        )
    }

    public async setHeaderText(headerText: string) {
        this._headerText = headerText;
    }

    public async setNavLinks(navLinks: NavLink[]) {
        this._navLinks = navLinks;
    }
}


const DEFAULT_CONTENT_DATA = {
    headerText: "Title",
    navLinks: [
        {name: "Portfolio", url: "/portfolio"},
        {name: "Info", url: "/info"},
        {name: "Contact", url: "/contact"},
    ],
    photos: [
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/500-3aab79fc77d376dcaba1b1e999c0f3fe.jpg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/500-d617e9cb259a0ace7aa403cbe8fc26e3.jpg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/2000-304626b3c506682975a53c640ff87a03.jpeg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/2000-640b50eacdd4bffb111740b745c649ee.jpg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/1000-9ca13e52aeaa8d9ad5464c542d779ba5.jpg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/2000-304626b3c506682975a53c640ff87a03.jpeg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/2000-a5534a111d1b5526d0852453e252cf0c.jpeg",
            alt: "Blog"
        },
        {
            src: "https://static-cdn5-2.vigbo.tech/u3388/98801/blog/6273367/5911325/90451942/1000-3b251014679036e11aeec12ef925daf8.jpeg",
            alt: "Blog"
        },
    ]
}

const contentStore = new ContentStore();
await Promise.all([
    contentStore.setNavLinks(DEFAULT_CONTENT_DATA.navLinks),
    contentStore.setHeaderText(DEFAULT_CONTENT_DATA.headerText),
    contentStore.setPhotos(DEFAULT_CONTENT_DATA.photos)
]);

export default contentStore;