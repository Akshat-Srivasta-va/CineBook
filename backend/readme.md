# CineBook Backend

## Overview
The backend of CineBook is built with **Node.js, Express, and MongoDB**, providing RESTful APIs for managing users, movies, shows, and bookings. It also supports authentication via **Clerk**, event handling with **Inngest**, and media management with **Cloudinary**.

## Key Features
- **User Management:** Register, login, and manage user profiles.  
- **Movie & Show Management:** Admin can add, update, and list movies and shows.  
- **Booking Management:** Users can book seats, and admins can manage bookings.  
- **Integration with TMDB API:** Fetch movie data dynamically.  
- **Notifications & Events:** Using Inngest for event-driven actions.  
- **Authentication:** Clerk-based authentication for users and admins.  

## Folder Structure
```text
server/
 ┣ controllers/       ← Handles request logic
 ┃ ┣ adminController.js
 ┃ ┣ bookingController.js
 ┃ ┣ showController.js
 ┃ ┗ userController.js
 ┣ models/            ← Mongoose models
 ┃ ┣ Booking.js
 ┃ ┣ Movie.js
 ┃ ┣ Show.js
 ┃ ┗ User.js
 ┣ routes/            ← API endpoints
 ┃ ┣ adminRoutes.js
 ┃ ┣ bookingRoutes.js
 ┃ ┣ movieRoutes.js
 ┃ ┣ showRoutes.js
 ┃ ┗ userRoutes.js
 ┣ configs/           ← Configuration files
 ┃ ┗ db.js
 ┣ middleware/        ← Middleware functions
 ┃ ┗ auth.js
 ┣ inngest/           ← Event-driven functions
 ┃ ┗ index.js
 ┗ server.js          ← Entry point

 ```

 # Installation

```
git clone <your-repo-url>
cd backend
npm install
```

# Environment Variables

MONGODB_URI=<your-mongodb-uri>
CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
INNGEST_EVENT_KEY=<your-inngest-event-key>
INNGEST_SIGNING_KEY=<your-inngest-signing-key>
TMDB_API_KEY=<your-tmdb-api-key>




 


