import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Upload from './components/Upload'
const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    
  )
}

export default AllRoutes
