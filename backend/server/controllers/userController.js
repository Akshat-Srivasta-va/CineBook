// API Controller Function to Get User Booking

import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking";

export const getUserBooking = async (req, res) => {
  try {
    const user = req.auth().userId;

    const bookings = await Booking({ user })
      .populate({
        path: "show",
        populate: { path: "movie" },
      })
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API Controller Function to Add Favourite Movie in Clerk User Metadata

export const addFavourite = async (req, res) => {
  try {
    const {movieId} = req.body;
    const userId = req.auth().userId;

    const user = await clerkClient.users.getUser(userId)

    if(!user.privateMetadata.favourites) {
        user.privateMetadata.favourites = []
    }

    if(!user.privateMetadata.favourites.includes(movieId)) {
        user.privateMetadata.favourites.push(movieId)
    }

    await clerkClient.users.updateUserMetadata(userId, {privateMetadata: user.privateMetadata})

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
