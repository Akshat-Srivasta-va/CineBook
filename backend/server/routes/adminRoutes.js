import express from 'express';
import { protectAdmin } from '../middleware/auth';
import { getAllBookings, getAllShows, getDashboardData, isAdmin } from '../controllers/adminController';

const adminRouter = express.Router();

adminRouter.get('/isAdmin', protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, getDashboardData)
adminRouter.get('/all-shows', protectAdmin, getAllShows)
adminRouter.get('/all-shows', protectAdmin, getAllBookings)


export default adminRouter;
 