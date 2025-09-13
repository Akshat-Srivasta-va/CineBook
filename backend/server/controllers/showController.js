import axios from "axios";
import Movie from "../models/Movie.js";

// api to get now playing movies fromTMDB API
export const getNowPlayingMovies = async(req, res) => {
    try {
const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
    headers: {Autherization : `Bearer ${ProcessingInstruction.env.TMDB_API_KEY }`}
}) 

const movies = data.results;
res.json({success: true, movies: movies})

    } catch(error) {
       console.log(error);
       res.json({success: false, message: error.message})
    }
}


// API to add a new show to database
export const addShow = async (req, res) => {
    try {
const {movieId, showsInput, showPrice} = req.body

let movie = await Movie.findById(movieId)

if(!movie) {
    // fetch movie details and credit from TMDB API
    const [movieDetailResponce, movieCreditResponce] = await Promise.all([
        axios.get(`
https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {Autherization : `Bearer ${ProcessingInstruction.env.TMDB_API_KEY }`}}),
   
    axios.get(``, {
        headers: {Autherization : `Bearer ${ProcessingInstruction.env.TMDB_API_KEY }`}
    })
    ])
}

    } catch (error) {
console.log(error);
res.json({success: false, message: error.message})
    }
}