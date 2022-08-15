import React from 'react';
import {Typography, Box} from '@mui/material';

const About: React.FC = () => {

        return (
            <>
            <Box sx={{ display: "flex", justifyContent: "center", margin:'auto' }}>
                <Typography variant="h4" sx={{textAlign:"center", marginTop:"70px"}}>
                    About me
                </Typography >
                <Box sx={{ marginTop: "78px", marginLeft:'130px', justifyContent:'center', display:'flex'}}>
                    <Typography variant="body1" sx={{ fontSize: '16px', width:'100%'}}>
                        Job: University Student<br />
                        Birthday: June 28th, 2001<br />
                        Origin: Aichi, Japan<br />
                        Hobbies: Coding, Listen to music, Drink alcohol, Play video games<br />
                        Licenses: Hazardous Materials Engineer's Class B Group 4<br />    
                        Speaks: Japanese, English(US)<br />
                    </Typography>
                </Box>
            </Box>
            </>
        )
}

export default About;