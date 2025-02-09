import { expect, test } from "vitest";
import albumServices from "../src/services/album/album.services";

test("getAlbums", async () => {
    const albums = await albumServices.searchAlbums({ query: "Skatsune Miku" });
    console.log(albums, "FUFUGAZER");
    expect(albums).toBeDefined();
    expect(albums.items.length).toBeGreaterThan(0);
});


test("getAlbumsByID", async () => {
    const album = await albumServices.getAlbum(1);
    expect(album).toBeDefined();
});