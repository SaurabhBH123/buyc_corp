import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MarketPlaceInventory from '../pages/MarketPlaceInventory'
import OEMSpecs from '../pages/OEMSpecs'
import DealerInventory from '../pages/DealerInventory'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MarketPlaceInventory />}/>
            <Route path='/oem' element={<OEMSpecs />}/>
            <Route path="/dealerinventory" element={<DealerInventory />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes