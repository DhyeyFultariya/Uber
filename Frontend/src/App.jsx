import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start.jsx'
import UserLogin from './Pages/UserLogin.jsx'
import UserSignup from './Pages/UserSignup'
import CaptainSignup from './Pages/CaptainSignup.jsx'
import CaptainLogin from './Pages/CaptainLogin.jsx'
import Home from './Pages/Home.jsx'
import UserProtectWrapper from './Pages/UserProtectWrapper.jsx'
import UserLogout from './Pages/UserLogout.jsx'
import CaptainHome from './Pages/CaptainHome.jsx'
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper.jsx'
import CaptainLogout from './Pages/CaptainLogout.jsx'
import Riding from './Pages/Riding.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Start /> } />
        <Route path="/home" element={ <UserProtectWrapper> <Home /> </UserProtectWrapper>} />
        <Route path="/login" element={ <UserLogin /> } />
        <Route path="/singup" element={ <UserSignup /> } />
        <Route path="/captain-signup" element={ <CaptainSignup /> } />
        <Route path="/captain-login" element={ <CaptainLogin /> } />
        <Route path='/user/logout' element={ <UserProtectWrapper> <UserLogout /> </UserProtectWrapper>  } />  
        <Route path='/captain-home' element={ <CaptainProtectWrapper> <CaptainHome /> </CaptainProtectWrapper> } />
        <Route path='captain/logout' element={ <CaptainProtectWrapper> <CaptainLogout /> </CaptainProtectWrapper> } />
        <Route path='/riding' element={ <Riding /> } />

      </Routes>
    </div>
  )
}

export default App