import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';

const Nav: React.FC = () => {
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
                <Button color='inherit'>
                    About me
                </Button>
                <Button color='inherit'>
                    Skills
                </Button>
                <Button color='inherit'>
                    Products
                </Button>
                <Button color='inherit'>
                    Contact
                </Button>
            </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav;