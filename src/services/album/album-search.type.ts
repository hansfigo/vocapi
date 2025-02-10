enum DiscTypeEnum {
    Unknown = "Unknown",
    Album = "Album",
    Single = "Single",
    EP = "EP",
    SplitAlbum = "SplitAlbum",
    Compilation = "Compilation",
    Video = "Video",
    Artbook = "Artbook",
    Game = "Game",
    Fanmade = "Fanmade",
    Instrumental = "Instrumental",
    Other = "Other",
    Drama = "Drama"
}

enum ArtistParticipationStatusEnum {
    Everything = "Everything",
    OnlyMainAlbums = "OnlyMainAlbums",
    OnlyCollaborations = "OnlyCollaborations"
}

enum StatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}

enum SortEnum {
    None = "None",
    Name = "Name",
    ReleaseDate = "ReleaseDate",
    ReleaseDateWithNulls = "ReleaseDateWithNulls",
    AdditionDate = "AdditionDate",
    RatingAverage = "RatingAverage",
    RatingTotal = "RatingTotal",
    NameThenReleaseDate = "NameThenReleaseDate",
    CollectionCount = "CollectionCount"
}

enum NameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}

interface AdvancedAlbumFilter {
    type: string;
    param: string;
    desc: string;
    negate: boolean;
}


interface ISearchAlbumsQueryParams {
    query?: string;
    discTypes?: DiscTypeEnum;
    tagName?: string[];
    tagId?: number[];
    childTags?: boolean;
    artistId?: number[];
    artistParticipationStatus?: ArtistParticipationStatusEnum;
    childVoicebanks?: boolean;
    includeMembers?: boolean;
    barcode?: string;
    status?: StatusEnum;
    releaseDateAfter?: string; // ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
    releaseDateBefore?: string; // ISO 8601 format
    advancedFilters?: AdvancedAlbumFilter[];
    start?: number;
    maxResults?: number;
    getTotalCount?: boolean;
    sort?: SortEnum;
    preferAccurateMatches?: boolean;
    deleted?: boolean;
    nameMatchMode?: NameMatchModeEnum;
    fields?: FieldsEnum;
    lang?: LangEnum;
}
