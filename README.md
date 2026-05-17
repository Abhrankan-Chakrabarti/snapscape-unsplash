# SnapScape

SnapScape is a lightweight image discovery web application that uses the Unsplash API to let users explore curated photos and search for high-quality, royalty-free images. The app is built with vanilla HTML, CSS, and JavaScript for the frontend, and a small Express backend proxy to securely fetch Unsplash data.

## Features

- Browse the latest Unsplash photos
- Search for images by keyword
- Photo attribution with proper Unsplash credit links
- Responsive gallery layout
- Minimal setup using Node.js and Express

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Express
- Node.js
- Unsplash API

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Unsplash developer access key

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhrankan-Chakrabarti/snapscape-unsplash.git
   cd snapscape-unsplash
   ```

2. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```

3. Create a `.env` file inside the `server` folder with your Unsplash access key:

   ```env
   UNSPLASH_ACCESS_KEY=your_access_key_here
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open `index.html` in your browser or serve the frontend from a local static server.

## Usage

- Open the app in the browser
- Search for photos using the search bar
- Click the photographer name or Unsplash link to view attribution and source

## Project Structure

- `index.html` — main frontend page
- `style.css` — styling for the gallery and layout
- `script.js` — client logic for fetching and rendering photos
- `config.js` — frontend API base URL configuration
- `server/server.js` — Express backend proxy for Unsplash API requests
- `server/package.json` — backend dependencies

## Notes

- The frontend uses `config.js` to switch between localhost and deployed backend URLs.
- The backend proxy is used so the Unsplash API key stays on the server and is not exposed in the browser.

## License

MIT
