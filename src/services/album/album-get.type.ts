


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

interface getAlbumQueryParams {
    fields?: FieldsEnum;
    songFields?: SongFieldsEnum;
    lang?: LangEnum;
}