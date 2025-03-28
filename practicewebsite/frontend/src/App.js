import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Pages/Nav';
import Footer from './Pages/Footer';
import { ToastContainer } from 'react-toastify';
import Courses from './Pages/Courses';

function App() {
  return (
    <div>
        <Router>
        <ToastContainer position='top-center'/>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
