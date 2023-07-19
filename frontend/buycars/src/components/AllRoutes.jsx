import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MarketPlaceInventory from '../pages/MarketPlaceInventory'
import OEMSpecs from '../pages/OEMSpecs'
import DealerInventory from '../pages/DealerInventory'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import AddCar from '../pages/AddCar'
import EditDetails from '../pages/EditDetails'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MarketPlaceInventory />}/>
            <Route path='/oem' element={<OEMSpecs />}/>
            <Route path="/dealerinventory" element={<PrivateRoute><DealerInventory /></PrivateRoute>}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/addcar' element={<PrivateRoute><AddCar /></PrivateRoute>}/>
            <Route path='/editdetails/:id' element={<PrivateRoute><EditDetails /></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes