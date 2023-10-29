import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import SSignup from './pages/Signup/SSignup';
import FSignup from './pages/Signup/FSignup';
import StudentLogin from './pages/login/StudentLogin';
import FacultyLogin from './pages/login/FacultyLogin';
import StudentHome from './LSpace/StudentHome';
import Dash from './LSpace/Dash';

// import StudentLogin from './pages/login/StudentLogin';
function App() {
  return (
    <>
     <Router>
<Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/login" element={<StudentLogin/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/feature" element={<Features/>} />
      <Route exact path="/ssignup" element={<SSignup/>} />
      <Route exact path="/fsignup" element={<FSignup/>} />
      <Route exact path="/flogin" element={<FacultyLogin/>} />
      {/* <Route exact path="/slogin" element={<StudentLogin/>} /> */}

   
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/demo1" element={<Dash/>} />
      <Route exact path="/studenthome" element={<StudentHome/>} />
</Routes>
    </Router></>
  );
}

export default App;
