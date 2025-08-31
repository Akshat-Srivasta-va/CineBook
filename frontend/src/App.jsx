import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const App = () => {

const isAdminRoute = useLocation().pathname.startsWith('/admin');

  return (
    <>
    <Toaster />
    {!isAdminRoute && <NavBar />}
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/movies' element={<Movies />}/>
  <Route path='/movies/:id' element={<MovieDetail />}/>
  <Route path='/movies/:id/:date' element={<SeatLayout />}/>
  <Route path='/my-bookings' element={<MyBooking/>}/>
  <Route path='/favourite' element={<Favourite/>}/>
</Routes>
 {!isAdminRoute && <Footer />}
    </>

  )
}

export default App