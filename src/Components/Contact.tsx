import React from 'react';
import { Typography, Box, Button} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Contact: React.FC = () => {
    return (
        <>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography variant="h4" sx={{textAlign:"center", fontSize: "24px", marginTop:"80px"}}>
                    Contact
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button target="_blank" href="https://twitter.com/tsuttsun_kk">
                    <TwitterIcon style={{ width: "50px", height: "50px", top: "-10px", margin: "20px" }} />
            </Button>
            <Button target="_blank" href="https://github.com/wind111-lang">
                    <GitHubIcon style={{ width: "50px", height: "50px", top: "-10px", margin: "20px" }} />
                </Button>
                <Button target="_blank" href="mailto:k20076kk@aitech.ac.jp">
                <EmailIcon style={{ width: "50px", height: "50px", top: "-10px", margin: "20px" }} />
                </Button>
            </Box>
        </>
        )
}

export default Contact;