import React from 'react';
import { Box, Avatar, Typography} from '@mui/material'
import MediaQuery from 'react-responsive';
import Image from "next/image"

const Profile: React.FC = () =>{
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MediaQuery query='(max-width:400px)'>
                    <Image alt="Tsutsui Shota" src="./me.jpg" width={150} height={150} />
                    <Typography sx={{ fontSize: '28px', textAlign: "center", marginTop: "120px", marginLeft:"20px"}}>
                        Tsutsui Shota
                    <Typography sx={{fontSize: '18px', textAlign:"center", marginRight:"0px"}}>
                        University Student
                        </Typography>
                    </Typography>
                </MediaQuery>
                <MediaQuery query='(min-width:401px)'>
                    <Image alt="Tsutsui Shota" src="./me.jpg" width={300} height={300} />
                    <Typography sx={{ fontSize: '44px', textAlign: "center", marginTop: "160px", marginLeft:"20px"}}>
                        Tsutsui Shota
                    <Typography sx={{fontSize: '24px', textAlign:"center", marginRight:"0px"}}>
                        University Student
                    </Typography>
                    </Typography>
                </MediaQuery>
            </Box>
        </>
    );
}

export default Profile;