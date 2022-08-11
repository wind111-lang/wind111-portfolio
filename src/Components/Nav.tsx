import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

interface NavProps {
    about: any;
    skill: any;
    product: any;
    contact: any;
}

const Nav: React.FC<NavProps> = ({about,skill,product,contact}) => {
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