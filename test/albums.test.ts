import { expect, test } from "vitest";

import Vocapi from "../src/index";

test("getAlbums", async () => {
    const albums = await Vocapi.album.search({ query: "Skatsune Miku" });
    console.log(albums, "FUFUGAZER");
    expect(albums).toBeDefined();
    expect(albums.items.length).toBeGreaterThan(0);
});


test("getAlbumsByID", async () => {
    const album = await Vocapi.album.get(1);
    expect(album).toBeDefined();
});