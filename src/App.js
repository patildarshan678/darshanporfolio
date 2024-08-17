import logo from './logo.svg';
import './App.css';
import NavBar from './components/home/NavBar';
import Home from './components/home/Home';
import Experience from './components/expterties/Projects';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="projects" element={ <Experience/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
   
        </div>
  );
}

export default App;
