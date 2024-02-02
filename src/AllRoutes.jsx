import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Upload from './Upload'
import Trial from './Trial'
const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/trial' element={<Trial/>}/>
      </Routes>
    
  )
}

export default AllRoutes
