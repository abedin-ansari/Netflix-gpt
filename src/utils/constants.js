export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
  cache: "force-cache",
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SupportedLanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "हिंदी" },
  { identifier: "es", name: "Español" },
];
