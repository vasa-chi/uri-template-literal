# A small function to format URIs [![Build Status](https://travis-ci.org/vasa-chi/uri-template-literal.svg?branch=master)](https://travis-ci.org/vasa-chi/uri-template-literal)

uri-template-literal simplifies formatting of URIs with encodeURIComponent
through [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals).

## Example

```js
import uri from "uri-template-literal";

// /api/search?q=strange%3Fstring%5Cwith%2Funicode%C2%A1
let queryURI = uri`/api/search?q=${"strange?string\\with/unicode¡"}`
fetch(queryURI)
  .then(...)
```
