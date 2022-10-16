
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Diet from './pages/Diet';
import Login from './pages/Login';
import Exercise from './pages/Exercise';
import Parties from './pages/Parties';
import Signup from './pages/Signup'
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/diet' element={<Diet/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/exercises' element={<Exercise/>} />
      <Route path='/Parties' element={<Parties/>} />

      </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
