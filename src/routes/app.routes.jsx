import { Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { Login } from '../pages/login'
import { Perfil } from '../pages/Perfil'

export function AppRoutes(){
    return(
        <Routes>
         <Route path='/' element={ <Login/> } />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        </Routes>
    )
}