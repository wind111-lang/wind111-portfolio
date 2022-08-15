import React from 'react';
import { Box, Avatar, Typography} from '@mui/material'
import MediaQuery from 'react-responsive';
import Image from "./me.jpg"

const Profile: React.FC = () =>{
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <MediaQuery maxWidth={375}>
                <Avatar
                    alt="Tsutsui Shota" src={Image}
                    style={{ width: "150px", height: "150px", top: "50px", right: "90px", margin: "20px" }}
                    />
                </MediaQuery>
            <MediaQuery minWidth={375}>
                <Avatar
                    alt="Tsutsui Shota" src={Image}
                    style={{ width: "300px", height: "300px", top: "50px", right: "90px", margin: "20px" }}
                    />
            </MediaQuery>
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

export default Profile;