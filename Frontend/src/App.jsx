import React from 'react'
import { Router} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Router path="/" element={ <Home /> } />
    </div>
  )
}

export default App 