import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

console.log("Using token:", process.env.TMDB_API_KEY);

(async () => {
  try {
    const res = await axios.get("https://api.themoviedb.org/3/movie/550", {
      headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
      timeout: 5000,
    });
    console.log("Success:", res.data.title);
  } catch (err) {
    console.error("Error code:", err.code);
    console.error("Message:", err.message);
  }
})();
