import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Upload from './components/Upload'
import Register from './components/Register'
import { useState } from 'react'

const AllRoutes = () => {
  const [user,setUser]=useState()
  return (
    
      <Routes>
        <Route path='/' element={<Home setUser={setUser}/>}/>
        <Route path='/register' element={<Register setUser={setUser}/>}/>
        <Route path='/upload' element={<Upload user={user}/>}/>
      </Routes>
    
  )
}

export default AllRoutes
