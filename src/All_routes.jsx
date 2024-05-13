import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Job from './pages/Job/Job'
import Auth from './pages/Auth/Auth'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Jobs/:id' element={<Job/>} />
        <Route path='/Auth' element={<Auth/>} />
    </Routes>
  )
}

export default All_routes
