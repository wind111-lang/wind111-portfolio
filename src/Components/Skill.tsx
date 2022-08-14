import React from 'react';
import { Box, Grid, Typography, Card} from '@mui/material';
import Image from "./coding.jpg";

const Skill: React.FC = () => {
const skills = ['C','Python','Java','Go','Gin','Gorm','Unity','Docker','Git','MariaDB']
        return (
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} direction="row">
                        <Box sx={{ textAlign: 'center'}}>
                            <Typography variant="h4" sx={{marginTop:'30px'}}>
                                Skills
                            </Typography>
                            {skills.map((skill) =>
                                <Grid item direction="row" xs={4} sx={{ margin: 'auto' }}>
                                    <Card sx={{ margin: '0.7em', fontSize:"16px"}}>
                                        {skill}
                                    </Card>
                                </Grid>
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box component='img' alt='skill' src={Image} sx={{width:'520px', height:'520px'}}></Box>
                    </Grid>
                </Grid>
            </>
        )
}

export default Skill;