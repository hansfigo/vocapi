interface IAlbum {
    artistString: string;
    catalogNumber?: string;
    createDate: string; // ISO date string
    defaultName: string;
    defaultNameLanguage: string;
    discType: string;
    id: number;
    name: string;
    ratingAverage: number;
    ratingCount: number;
    releaseDate: IReleaseDate;
    status: string;
    version: number;
    artists?: IAlbumArtist<IArtist>[];
}

interface IAlbumArtist<T> {
    artist: T;
    categories: string;
    effectiveRoles: string;
    isSupport: boolean;
    name: string;
    roles: string;
}
