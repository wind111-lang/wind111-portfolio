import React from 'react';
import Link from 'react-scroll';
import{Box,Avatar,Typography,Paper} from '@mui/material'

import Image from "./me.jpg"

const About: React.FC = () =>{
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{marginTop:"20px", marginLeft:"100px", fontSize:"50px"}}>
                    About me
                </Typography>
                <Avatar
                    alt="Tsutsui Shota" src={Image}
                    style={{ width: "300px", height: "300px", top: "-10px", left: "400px", margin: "20px" }}
                />
                <Typography sx={{fontSize: '48px', textAlign: "center", marginTop: "-250px", marginRight: "-300px", position: "relative"}}>
                    Tsutsui Shota
                </Typography>
                <Typography sx={{fontSize: '28px', textAlign: "center", marginTop: "-5px", marginRight: "-300px", position: "relative"}}>
                    University Student
                </Typography>
            </Box>
        </>
    );
}

export default About;