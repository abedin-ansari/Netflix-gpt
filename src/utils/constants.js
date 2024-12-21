export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
  cache: "force-cache",
};

// Add preconnect for TMDB
const preconnectLink = document.createElement("link");
preconnectLink.rel = "preconnect";
preconnectLink.href = "https://api.themoviedb.org";
document.head.appendChild(preconnectLink);

// Add preconnect for image CDN
const imagePreconnectLink = document.createElement("link");
imagePreconnectLink.rel = "preconnect";
imagePreconnectLink.href = "https://image.tmdb.org";
document.head.appendChild(imagePreconnectLink);

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SupportedLanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "हिंदी" },
  { identifier: "es", name: "Español" },
];
