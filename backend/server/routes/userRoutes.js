import express from "express";
import { getFavourites, getUserBooking, updateFavourite } from "../controllers/userController.js";
// import User from "../models/User.js";

// const router = express.Router();

// // Get all users
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;


const userRouter = express.Router();

userRouter.get('/', (req, res) => res.json({ message: 'User route working' }));
userRouter.get('/bookings', getUserBooking)
userRouter.post('/update-favourite', updateFavourite)
userRouter.get('/favourites', getFavourites)

export default userRouter;
