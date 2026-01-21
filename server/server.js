import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import "dotenv/config";

const app = express();

// Use Render's port or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/photos", async (req, res) => {
  const query = req.query.q;

  const url = query
    ? `https://api.unsplash.com/search/photos?query=${query}&per_page=12`
    : `https://api.unsplash.com/photos?per_page=12`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
