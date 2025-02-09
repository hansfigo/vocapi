interface Album {
    artistString: string;
    catalogNumber? : string;
    createDate: string; // ISO date string
    defaultName: string;
    defaultNameLanguage: string;
    discType: string;
    id: number;
    name: string;
    ratingAverage: number;
    ratingCount: number;
    releaseDate: ReleaseDate;
    status: string;
    version: number;
    artists?: AlbumArtist<Artist>[];
}

interface AlbumArtist<T> {
    artist: T;
    categories: string;
    effectiveRoles: string;
    isSupport: boolean;
    name: string;
    roles: string;
}
