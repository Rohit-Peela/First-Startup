import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';


function App() {

  const [wts, setWts] = useState(true);
  return (
    <Router>
      <Home setWts={setWts}  wts={wts}/>
      {
        wts 
        ? <a
        href="https://api.whatsapp.com/send?phone=+919290683777"
        class="whatsapp_float"
        target="_blank"
        rel="noopener"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a> : ''
      }
      
    </Router>
  );
}

export default App;
