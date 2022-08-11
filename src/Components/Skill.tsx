import React from 'react';
import { Box, Grid, Typography} from '@mui/material';
import Image from "./coding.jpg";

const Skill: React.FC = () => {
const skills = ['C','C#','Python','Java','Go','Gin','Gorm','Unity','Docker','Git','MariaDB']
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={6}>
                        <Box sx={{ textAlign: 'center'}}>
                            <Typography variant="h4" sx={{marginTop:'30px'}}>
                                Skills
                            </Typography>
                            {skills.map((skill) =>
                                <Typography sx={{ margin:'1em'}}>
                                    {skill}
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box component='img' alt='skill' src={Image} sx={{width:'500px', height:'500px'}}></Box>
                    </Grid>
                </Grid>
            </>
        )
}

export default Skill;