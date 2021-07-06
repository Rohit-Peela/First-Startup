import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';


function App() {
  return (
    <Router>
      <Home/>
      <a
        href="https://api.whatsapp.com/send?phone=+919290683777"
        class="whatsapp_float"
        target="_blank"
        rel="noopener"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </Router>
  );
}

export default App;
