# Vocapi JS
Javascript client-side wrapper for [VocaDB API](https://vocadb.net/)

## 🚧 Status
Work in Progress (WIP) – This library is still in development. More features will be added soon!


## Usage  
```ts
import Vocapi from "vocapi";

const albumId = 123;

Vocapi.album.getAlbum(albumId)
  .then(album => console.log(album))
  .catch(error => console.error(error));

Vocapi.album.searchAlbums({ query: "Skatsune Miku" })
  .then(album => console.log(album))
  .catch(error => console.error(error));
```
