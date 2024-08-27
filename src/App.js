import logo from './logo.svg';
import './App.css';
import NavBar from './components/home/NavBar';
import Home from './components/home/Home';
import Experience from './components/expterties/Projects';
import Contact from './components/Contact';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const handleChange = useCallback((event,newVal) => {
    setValue( newVal);
}, [value]);

const navigate = useNavigate();
function tablhandler(index)
    {
        switch (index) {
            case 0:
                navigate("/Darshan-Porfolio/")
              // Code to be executed if expression matches value1
              break;
            case 1:
                navigate("/Darshan-Porfolio/projects")
              // Code to be executed if expression matches value2
              break;
            // Add more cases as needed
            case 2:
                navigate("/Darshan-Porfolio/contact")
            default:
              // Code to be executed if expression doesn't match any case
          }
    }
  return (
    <div className="App">
    <NavBar activeTab={value} tablchangehandler={handleChange} tablhandler={tablhandler}/>
    <Routes>
        <Route path="/Darshan-Porfolio/" element={ <Home setActiveTab={handleChange}/> } />
        <Route path="/Darshan-Porfolio/projects" element={ <Experience setActiveTab={handleChange}/> } />
        <Route path="/Darshan-Porfolio/contact" element={ <Contact setActiveTab={handleChange}/> } />
      </Routes>
   
        </div>
  );
}

export default App;
