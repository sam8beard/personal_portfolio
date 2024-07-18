import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import './custom.scss'
function App() {
 
  return (

    <div className="app-parent"> 
      <div className="nav-container"> 
          <NavigationBar/> 
      </div>
      
      <Routes> 
            <Route
                path='/personal_portfolio/'
                element={<Home/>}
            />

            <Route 
                path='/personal_portfolio/contact/'
                element={<Contact/>}
            />
      </Routes>

      
    </div> 
      

  )
}

export default App
