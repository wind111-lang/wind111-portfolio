import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

interface NavProps {
    profile: any;
    about: any;
    skill: any;
    product: any;
    contact: any;
}

const Nav: React.FC<NavProps> = ({ profile, about, skill, product, contact }) => {
    const profileScroll = () =>profile.current.scrollIntoView({ behavior: 'smooth' });
    const aboutScroll = () => about.current.scrollIntoView({ behavior: 'smooth' });
    const skillScroll = () => skill.current.scrollIntoView({ behavior: 'smooth' });
    const productScroll = () => product.current.scrollIntoView({ behavior: 'smooth' });
    const contactScroll = () => contact.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <AppBar
                position='static'
                style={{
                    alignItems: 'center',
                    color: 'green',
                    backgroundColor: 'lightgray',

                }}
            >
                <Toolbar>
                <Button color='inherit' onClick={profileScroll}>
                    Profile
                </Button>
                <Button color='inherit' onClick={aboutScroll}>
                    About me
                </Button>
                <Button color='inherit' onClick={skillScroll}>
                    Skills
                </Button>
                <Button color='inherit' onClick={productScroll}>
                    Products
                </Button>
                <Button color='inherit' onClick={contactScroll}>
                    Contact
                </Button>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav;