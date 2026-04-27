import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AddProduct from './AdminPages/CRUD/AddProduct'
import ViewProduct from './AdminPages/CRUD/ViewProduct'
import UserIndex from './UserPages/UserIndex'
import AdminIndex from './AdminPages/AdminIndex'
import SignIn from './UserPages/SignIn'
import SignUp from './UserPages/SignUp'
import PrivateRoute from './PrivateRoute'

import UserAbout from './UserPages/About'
import UpdatePro from './AdminPages/CRUD/UpdatePro'
import DetailPage from './UserPages/DetailPage'
import Contact from './UserPages/Contact'

function App() {
  return (
    <>
      {/* <nav>
      <Link to='/'>Add Product</Link>
      <Link to='/viewproduct'>View Product</Link>
    </nav> */}

      <Routes>
        {/* <Route path='/' element={ <AddProduct />}/>
      <Route path='/viewproduct' element={ <ViewProduct />}/> */}


        {/* ADMIN PAGES  */}
        <Route path='/admin' element={
          <PrivateRoute>
            <AdminIndex />
          </PrivateRoute>
        } />
        <Route path='/addproduct' element={<PrivateRoute><AddProduct /></PrivateRoute>} />
        <Route path='/viewproduct' element={<PrivateRoute><ViewProduct /></PrivateRoute>} />
        <Route path='/updateproduct' element={<PrivateRoute><UpdatePro /></PrivateRoute>} />


        {/* USER PAGES  */}
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/userhome' element={
          <PrivateRoute>
            <UserIndex />
          </PrivateRoute>
        } />
        <Route path='/userabout' element={<PrivateRoute><UserAbout /></PrivateRoute>} />
        <Route path='/detailpage' element={<PrivateRoute><DetailPage /></PrivateRoute>} />
        <Route path='/usercontact' element={<PrivateRoute><Contact /></PrivateRoute>} />

      </Routes>
    </>
  )
}

export default App