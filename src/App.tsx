import React from 'react';
//import * as ReactDOM from 'react-dom';
import './App.css';
import Profile from './Components/Profile';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Skill from './Components/Skill';
import Product from './Components/Product';

const App: React.FC = () => {
    const about = React.useRef(null);
    const profile = React.useRef(null);
    const skill = React.useRef(null);
    const product = React.useRef(null);
    const contact = React.useRef(null);

        return (
            <>
                <section>
                    <Nav profile={profile} about={about} skill={skill} product={product} contact={contact} />
                </section>
                <section ref={profile}>
                    <Profile />
                </section>
                <section ref={about}>
                    <About />
                </section>
                <section ref={skill}>
                    <Skill />
                </section>
                <section ref={product}>
                    <Product />
                </section>
                <section ref={contact}>
                    <Contact />
                </section>
            </>
        );
}
export default App;
