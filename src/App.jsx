import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import './custom.scss'
function App() {
 
  return (

    <div className="app-parent"> 
      <div className="nav-container"> 
          <NavigationBar/> 
      </div>
      
      <Router> 
          <Routes> 
            <Route
                path='/personal_portfolio'
                element={<Home/>}
            />
          </Routes>

      </Router>
    </div> 
      

  )
}

export default App
