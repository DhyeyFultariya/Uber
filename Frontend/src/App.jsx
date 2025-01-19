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

      </Routes>
    </div>
  )
}

export default App