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
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/DashBoard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
import { useAppContext } from './context/AppContext'
import { SignIn } from '@clerk/clerk-react'



const App = () => {

const isAdminRoute = useLocation().pathname.startsWith('/admin');

const { user } = useAppContext()

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
  <Route path='/admin/*' element={user ? <Layout /> : (
    <div className='min-h-screen flex justify-center items-center'>
      <SignIn fallbackRedirectUrl={'/admin'}/>
    </div>
  )}>
      <Route index  element={<DashBoard />}/>
      <Route index path='add-shows' element={<AddShows />}/>
      <Route index path='list-shows' element={<ListShows />}/>
      <Route index path='list-bookings' element={<ListBookings />}/>
  </Route> 
</Routes>
 {!isAdminRoute && <Footer />}
    </>

  )
}

export default App