
export const search = (query, type) => fetch(`https://api.spotify.com/${query}&${type}`).then(data => data.json());
export const playlist = (query, type) => fetch(`https://api.spotify.com/${query}&${type}`).then(data => data.json());