import Booking from "../models/Booking.js"

// API to check if user is admin
export const isAdmin = async (req, res) =>{
    res.json({success: true, isAdmin: true})
}

// API to get dashboard data
export const getDashboardData = async(req, res) =>{
    try {
        const bookings = await Booking.find({isPaid: true})
    } catch (error) {
 
    }
}