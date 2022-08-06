import React from 'react';
import Link from 'react-scroll';
import{Box,Avatar,Typography} from '@mui/material'

import Image from "./me.jpg"

const About: React.FC = () =>{
    return (
        <>
            <Box>
                <Avatar
                    alt="Tsutsui Shota" src={Image}
                    style={{ width: "350px", height: "350px", position: "relative", top: "80px", left: "400px" }}
                />
                <Typography sx={{fontSize: '48px', textAlign: "center", marginTop: "-140px", marginRight: "-300px"}}>
                    Tsutsui Shota
                </Typography>
                <Typography sx={{fontSize: '28px', textAlign: "center", marginTop: "-5px", marginRight: "-300px"}}>
                    University Student
                </Typography>
            </Box>
        </>
    );
}

export default About;