import React from 'react'
import "./Admin.css"
import Sidebar from '../../Component/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Component/AddProduct/AddProduct'
import ListProduct from '../../Component/ListProduct/ListProduct'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  return (
    <div className='admin'>
     <ToastContainer/>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin
