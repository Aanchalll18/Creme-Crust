import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import {Route, Routes} from 'react-router-dom'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import Add from './pages/add/Add'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/orders' element={<Order/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
