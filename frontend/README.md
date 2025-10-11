# CineBook Frontend

## Overview
CineBook is a movie booking platform that allows users to browse, view details, and book movie tickets. The frontend is built with **React + TailwindCSS**, offering a **mobile-first, responsive, and interactive experience**. An **admin panel** is included for managing shows and bookings efficiently.

## Key Features
- **Home & Movies pages:** Browse and search movies with featured sections.  
- **MovieDetail page:** View detailed information, trailers, and available showtimes.  
- **SeatLayout page:** Select and book seats dynamically.  
- **Favourite & MyBooking pages:** Save favorite movies and track booking history.  
- **Admin Panel:** Manage shows and bookings through a dashboard (DashBoard, AddShows, ListShows, ListBookings).  

## Main Components
- **Layout & Navigation:**  
  - `NavBar.jsx` → User navigation bar  
  - `Footer.jsx` → Footer across the site  
  - `AdminNavbar.jsx` & `AdminSidebar.jsx` → Admin panel navigation  

- **Homepage & Movie Highlights:**  
  - `HeroSection.jsx` → Homepage banner  
  - `FeaturedSection.jsx` → Highlighted movies  
  - `MovieCard.jsx` → Reusable movie card component  
  - `TrailerSection.jsx` → Embedded movie trailers  

- **UX Enhancements:**  
  - `Loading.jsx` → Loader for API calls  
  - `BlurCircle.jsx` → Visual background effect  
  - `DateSelect.jsx` → Date selection for shows  

- **Admin Panel Components:**  
  - `Title.jsx` → Section titles for admin pages  

## Tech Stack
- **React** – Single Page Application framework  
- **TailwindCSS** – Utility-first styling  
- **Vite** – Frontend build tool and development server  
- **React Router DOM** – Client-side routing  
- **Axios** – HTTP requests to backend APIs  
- **Clerk React** – User authentication  
- **React Player** – Embedded video player for trailers  
- **React Hot Toast** – Notifications and alerts  
- **Lucide React** – Icon library  

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd frontend
npm install
npm run dev


