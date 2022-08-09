import React from 'react';
import { Box, Avatar, Typography, Paper } from '@mui/material'

import Image from "./me.jpg"

const About: React.FC = () =>{
    return (
        <>
            <Typography variant="h4" sx={{textAlign:"center", marginTop:"30px"}}>
                    About me
                </Typography>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Avatar
                    alt="Tsutsui Shota" src={Image}
                    style={{ width: "300px", height: "300px", top: "50px", right: "90px", margin: "20px" }}
                />
                <Typography sx={{ fontSize: '48px', textAlign: "center", marginTop: "160px", marginLeft:"20px"}}>
                    Tsutsui Shota
                    <Typography sx={{fontSize: '28px', textAlign:"center", marginRight:"0px"}}>
                    University Student
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}

export default About;