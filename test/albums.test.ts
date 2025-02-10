import { expect, test } from "vitest";

import Vocapi from "../src/index";

const v = new Vocapi();

test("Search Album", async () => {
    const albums = await v.album.search({ query: "Skatsune Miku" });
    expect(albums).toBeDefined();
    expect(albums.items.length).toBeGreaterThan(0);
});

test("Get Album by Id", async () => {
    const album = await v.album.get(1);
    expect(album).toBeDefined();
});

test("Get Top Albums", async () => {
    const albums = await v.album.getTop();

    expect(albums).toBeDefined();
    expect(albums.items.length).toBeGreaterThan(0);
})

test("Get Latest Albums", async () => {
    const albums = await v.album.getLatest();
    expect(albums).toBeDefined();
    expect(albums.items.length).toBeGreaterThan(0);
});