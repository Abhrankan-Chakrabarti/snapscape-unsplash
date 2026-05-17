// config.js
const CONFIG = {
  API_BASE: location.hostname.includes("github.io") || location.hostname.includes("dpdns.org")
    ? "https://snapscape-unsplash.onrender.com"
    : "http://localhost:3000"
};
