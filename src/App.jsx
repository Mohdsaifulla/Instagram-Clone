import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/auth' element={<AuthPage/>}/>

</Routes>
</>
  )
}

export default App