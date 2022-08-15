import React from 'react';
import { Box, Avatar, Typography} from '@mui/material'
import MediaQuery from 'react-responsive';
import Image from "./me.jpg"

const Profile: React.FC = () =>{
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MediaQuery query='(max-width:400px)'>
                    <Avatar
                        alt="Tsutsui Shota" src={Image}
                        style={{ width: "150px", height: "150px", top: "50px", right: "90px", margin: "20px" }}
                    />
                    <Typography sx={{ fontSize: '24px', textAlign: "center", marginTop: "160px", marginLeft:"20px"}}>
                        Tsutsui Shota
                    </Typography>
                    <Typography sx={{fontSize: '14px', textAlign:"center", marginRight:"0px"}}>
                        University Student
                    </Typography>
                </MediaQuery>
                <MediaQuery query='(min-width:401px)'>
                    <Avatar
                        alt="Tsutsui Shota" src={Image}
                        style={{ width: "300px", height: "300px", top: "50px", right: "90px", margin: "20px" }}
                    />
                    <Typography sx={{ fontSize: '48px', textAlign: "center", marginTop: "160px", marginLeft:"20px"}}>
                        Tsutsui Shota
                    </Typography>
                    <Typography sx={{fontSize: '28px', textAlign:"center", marginRight:"0px"}}>
                        University Student
                    </Typography>
                </MediaQuery>
            </Box>
        </>
    );
}

export default Profile;