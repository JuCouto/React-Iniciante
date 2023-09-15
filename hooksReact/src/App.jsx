
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'

function App() {
 

  return (
    <div className='App'>
      <h1>React Hooks</h1>
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
       <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes>
      </Router>
    
    </div>
  )
}

export default App
