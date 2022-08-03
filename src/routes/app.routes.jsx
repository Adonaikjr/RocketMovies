import { Routes, Route } from 'react-router-dom'
import { Createmovie } from '../pages/Createmovie'
import { Home } from '../pages/Home'
import { Login } from '../pages/login'
import { Perfil } from '../pages/Perfil'
import { Moviepreview } from '../pages/MoviePreview'

export function AppRoutes(){
    return(
        <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/createmovie' element={ <Createmovie/> }/>
        <Route path='/moviepreview' element={ <Moviepreview/> } />
        </Routes>
    )
}
