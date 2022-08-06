import React from 'react';
//import * as ReactDOM from 'react-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Skill from './Components/Skill';


const App: React.FC = () => {
        return (
            <>
                <Nav />
                <About />
                <Skill />
                <Contact />
            </>
        );
}
export default App;
