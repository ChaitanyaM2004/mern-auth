import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

export const App = () => {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
   </BrowserRouter>
  )
}
export default App;