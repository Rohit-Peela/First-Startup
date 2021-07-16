import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SignUp from './pages/signup';
import Navbar from './components/Navbar';


function App() {

  const [wts, setWts] = useState(true);
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Home} setWts={setWts}  wts={wts} exact /> */}
        <Route path="/" render={() => <Home setWts={setWts}  wts={wts}/>} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
      {/* <Home setWts={setWts}  wts={wts}/> */}
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
