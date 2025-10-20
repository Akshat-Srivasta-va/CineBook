# CineBook Backend 🎬
This is the backend server for the CineBook movie booking web application.  
It handles API requests, database operations, authentication, and communication with external services like TMDB and Clerk.

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Clerk** for Authentication
- **Axios** for API requests
- **Dotenv** for environment variables
- **Nodemailer** for sending emails

## 📂 Folder Structure

```
backend/
 ┣ 📂controllers/       ← Business logic for routes
 ┣ 📂models/            ← Mongoose schemas
 ┣ 📂routes/            ← API route definitions
 ┣ 📂middleware/        ← Auth and validation middlewares
 ┣ 📜server.js          ← Main entry file
 ┣ 📜.env               ← Environment variables
 ┗ 📜package.json       ← Dependencies and scripts
```

## 🔑 Environment Variables
Create a `.env` file in the root directory and add the following:

```
MONGODB_URI=your_mongo_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
TMDB_API_KEY=your_tmdb_api_key

```

## 🚀 Installation & Setup
1. Clone the repository 
```
git clone https://github.com/yourusername/cinebook-backend.git 
cd cinebook-backend
npm install
npm start

```

### 🌐 6. **API Routes Overview**
Give a brief idea of your API endpoints.

```markdown
## 🌐 API Routes Overview
| Route Prefix | Description |
|---------------|-------------|
| `/api/admin` | Admin-related routes |
| `/api/bookings` | Booking operations |
| `/api/movies` | Movie data routes |
| `/api/shows` | Show and seat details |
| `/api/users` | User-related actions |


