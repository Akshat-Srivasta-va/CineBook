import expresss from 'express';
import { getNowPlayingMovies } from '../controllers/showController.js  ';

const showRouter = expresss.Router();

showRouter.get('/now-playing', getNowPlayingMovies)

export default showRouter;