# Vocapi JS
Javascript client-side wrapper for [VocaDB API](https://vocadb.net/)

## 🚧 Status
Work in Progress (WIP) – This library is still in development. More features will be added soon!


## Usage  
```ts
import Vocapi from "vocapi";

const v = new Vocapi();

const album = await v.album.get(619)

const albumList = await v.album.search({ query: "Skatsune Miku" })

```
