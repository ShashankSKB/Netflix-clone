export const TMBD_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2ODI1NTNmNzdhMjk1YTcyM2RhNTAwY2NkNzQ2ZCIsInN1YiI6IjY0ZjEwNjg0NWYyYjhkMDBmZWYyYjQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96KgBa9Jnmmkt75Tn2RHkaiAUGTA3Egx789a6xzBv1Y";

export const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing";
export const POPULAR = "https://api.themoviedb.org/3/movie/popular";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + " " + TMBD_ACCESS_TOKEN,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
