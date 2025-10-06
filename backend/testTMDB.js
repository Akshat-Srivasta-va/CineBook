// testTMDB.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Make sure your .env has:
// TMDB_V4_TOKEN=eyJhbGciOiJIUzI1NiJ9... (your v4 token)

const v4Token = process.env.TMDB_API_KEY;

if (!v4Token) {
  console.error("❌ TMDB v4 token not found in .env");
  process.exit(1);
}

(async () => {
  try {
    console.log("✅ Using TMDB v4 token");

    // 1️⃣ Get account details
    const accountRes = await axios.get("https://api.themoviedb.org/4/account", {
      headers: {
        Authorization: `Bearer ${v4Token}`,
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });

    const accountId = accountRes.data.id;
    console.log("\nAccount details:");
    console.log(`ID: ${accountId}`);
    console.log(`Name: ${accountRes.data.name}`);
    console.log(`Username: ${accountRes.data.username}`);

    // 2️⃣ Get user's favorite movies (example)
    const favoritesRes = await axios.get(
      `https://api.themoviedb.org/4/account/${accountId}/favorite/movies`,
      {
        headers: {
          Authorization: `Bearer ${v4Token}`,
          "Content-Type": "application/json",
        },
        timeout: 5000,
      }
    );

    console.log("\nFavorite Movies:");
    favoritesRes.data.results.forEach((movie, index) => {
      console.log(`${index + 1}. ${movie.title}`);
    });

    console.log("\n✅ TMDB v4 test completed successfully!");
  } catch (err) {
    console.error("\n❌ TMDB v4 fetch failed");
    console.error("Error code:", err.code);
    console.error("Message:", err.message);
  }
})();
