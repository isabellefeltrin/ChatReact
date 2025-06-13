import {Routes, Route} from 'react-router-dom'
import { Chat } from '../Pages/Chat'
import { Login } from '../Pages/Login'

export function Router(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Chat' element={<Chat/>}/>
        </Routes>
        </>
    )
}