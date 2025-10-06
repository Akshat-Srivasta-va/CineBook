import express from 'express';
import { createBooking, getOccupiedSeats } from '../controllers/bookingController.js';


const bookingRouter = express.Router();

bookingRouter.get('/', (req, res) => res.json({ message: 'Booking route working' }));
bookingRouter.post('/create', createBooking);
bookingRouter.get('/seats/:showId', getOccupiedSeats);

export default bookingRouter;
