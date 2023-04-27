import { expect } from "chai";
import { describe } from "node:test";
import renderalbum from "albumlist";
describe(`albumlist`, () => {
  it(`should exist`, () => {
    expect(renderalbum).to.exist;
  });
  const data = {
    "href": "https://api.spotify.com/v1/albums/0rrO5LP57BRNfuzOYTU5Mh",
    "id": "0rrO5LP57BRNfuzOYTU5Mh",
    "images": [{
      "url": "https://i.scdn.co/image/ab67616d0000b27374b66c00ee25521b978a4514",
      "height": 640,
      "width": 640
    }, {
      "url": "https://i.scdn.co/image/ab67616d00001e0274b66c00ee25521b978a4514",
      "height": 300,
      "width": 300
    }, {
      "url": "https://i.scdn.co/image/ab67616d0000485174b66c00ee25521b978a4514",
      "height": 64,
      "width": 64
    }],
    "name": "Segunda-Feira de Manhã",
    "release_date": "2019-03-28",
    "release_date_precision": "day",
    "type": "album",
    "uri": "spotify:album:0rrO5LP57BRNfuzOYTU5Mh",
    "album_group": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/1EUzhuUomflz3o0BrfZnGn"
      },
      "href": "https://api.spotify.com/v1/artists/1EUzhuUomflz3o0BrfZnGn",
      "id": "1EUzhuUomflz3o0BrfZnGn",
      "name": "Deivis",
      "type": "artist",
      "uri": "spotify:artist:1EUzhuUomflz3o0BrfZnGn"

    }]
  };
});