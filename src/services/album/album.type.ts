interface ILatestAlbumsQueryParams {
    fields?: FieldsEnum;
    lang?: LangEnum;
}

interface ITopAlbumsQueryParams {
    ignoreIds?: number[];
    fields?: FieldsEnum;
    lang?: LangEnum;
}

enum SongFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    Albums = "Albums",
    Artists = "Artists",
    Lyrics = "Lyrics",
    MainPicture = "MainPicture",
    Names = "Names",
    PVs = "PVs",
    ReleaseEvent = "ReleaseEvent",
    Tags = "Tags",
    ThumbUrl = "ThumbUrl",
    WebLinks = "WebLinks",
    Bpm = "Bpm",
    CultureCodes = "CultureCodes"
}

interface IGetAlbumQueryParams {
    fields?: FieldsEnum;
    songFields?: SongFieldsEnum;
    lang?: LangEnum;
}

export { IGetAlbumQueryParams, ILatestAlbumsQueryParams, ITopAlbumsQueryParams };
