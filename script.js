// script.js

const gallery = document.getElementById("gallery");
const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");

// Base URL comes from config.js
const API_BASE = CONFIG.API_BASE;

// Load latest photos on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPhotos();
});

// Handle search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (query) {
    searchPhotos(query);
  } else {
    loadPhotos();
  }
});

// Fetch latest photos
async function loadPhotos() {
  try {
    const response = await fetch(`${API_BASE}/photos`);
    const photos = await response.json();
    displayPhotos(photos);
  } catch (error) {
    console.error("Error loading photos:", error);
    gallery.innerHTML = "<p>Failed to load photos.</p>";
  }
}

// Fetch searched photos
async function searchPhotos(query) {
  try {
    const response = await fetch(
      `${API_BASE}/photos?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    displayPhotos(data.results);
  } catch (error) {
    console.error("Error searching photos:", error);
    gallery.innerHTML = "<p>Search failed.</p>";
  }
}

// Render photos with attribution
function displayPhotos(photos) {
  gallery.innerHTML = "";

  if (!photos || photos.length === 0) {
    gallery.innerHTML = "<p>No photos found.</p>";
    return;
  }

  photos.forEach((photo) => {
    const container = document.createElement("div");

    const img = document.createElement("img");
    img.src = photo.urls.small;
    img.alt = photo.alt_description || "Unsplash photo";

    const credit = document.createElement("p");
    credit.innerHTML = `
      Photo by 
      <a href="${photo.user.links.html}?utm_source=SnapScape&utm_medium=referral" target="_blank">
        ${photo.user.name}
      </a> on 
      <a href="https://unsplash.com/?utm_source=SnapScape&utm_medium=referral" target="_blank">
        Unsplash
      </a>
    `;

    container.appendChild(img);
    container.appendChild(credit);
    gallery.appendChild(container);
  });
}
