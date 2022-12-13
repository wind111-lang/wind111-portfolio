import React from 'react';
//import * as ReactDOM from 'react-dom';
import './_app.css';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Skill from './components/Skill';
import Product from './components/Product';
import 'fontsource-noto-sans-jp';

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
