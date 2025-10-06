// testTMDB.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Make sure your .env has: TMDB_API_KEY=your_v3_key_here
console.log("Using TMDB API Key:", process.env.TMDB_API_KEY);

(async () => {
  try {
    // Fetch a single movie (Fight Club)
    const movieRes = await axios.get("https://api.themoviedb.org/3/movie/550", {
      params: { api_key: process.env.TMDB_API_KEY },
      timeout: 5000,
    });
    console.log("Single movie success:", movieRes.data.title); // Fight Club

    // Fetch popular movies
    const popularRes = await axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: { api_key: process.env.TMDB_API_KEY, language: "en-US", page: 1 },
      timeout: 5000,
    });

    console.log("\nPopular Movies:");
    popularRes.data.results.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title}`);
    });

    console.log("\n✅ TMDB test completed successfully!");
  } catch (err) {
    console.error("\n❌ TMDB fetch failed");
    console.error("Error code:", err.code);
    console.error("Message:", err.message);
  }
})();
